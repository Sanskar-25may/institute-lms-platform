import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
    newUser: "/onboarding",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          role: "STUDENT", 
        }
      }
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("User not found");
        }

        if (!user.passwordHash) {
          throw new Error("Please log in with Google");
        }

        if (user.isBlocked) {
          throw new Error("Your account has been blocked by the admin.");
        }

        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: user.email } });
        if (dbUser?.isBlocked) {
          throw new Error("Your account has been blocked by the admin.");
        }
      }
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      // Allow client-side session updates
      if (trigger === "update") {
        if (session?.role) token.role = session.role;
        if (session?.onboarded !== undefined) token.onboarded = session.onboarded;
      }

      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.email = user.email;
        
        // Check if user has completed onboarding (admins are always onboarded)
        if (user.role === "ADMIN" || token.email === (process.env.SUPER_ADMIN_EMAIL || "codersspot97@gmail.com")) {
           token.onboarded = true;
        } else {
           const profile = await prisma.userProfile.findUnique({ where: { userId: user.id } });
           token.onboarded = !!profile;
        }
      }
      
      // HARD SECURITY CHECK: Only this specific email can ever be ADMIN.
      // Even if someone hacks the database, NextAuth will forcefully downgrade them if their email doesn't match.
      const superAdminEmail = process.env.SUPER_ADMIN_EMAIL || "codersspot97@gmail.com"; 
      if (token.email === superAdminEmail) {
        token.role = "ADMIN";
        token.onboarded = true;
      } else if (token.role === "ADMIN") {
        // If they are ADMIN in DB but not the super admin email, downgrade them to prevent unauthorized access
        token.role = "STUDENT";
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
        session.user.onboarded = token.onboarded as boolean;
      }
      return session;
    },
  },
};
