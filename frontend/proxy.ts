import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    if (!token) {
      if (!path.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/auth", req.url));
      }
      return NextResponse.next();
    }

    const role = token.role;
    const onboarded = token.onboarded;

    // Force onboarding if they haven't finished it (Admins are exempt)
    if (!onboarded && role !== "ADMIN") {
      if (!path.startsWith("/onboarding") && !path.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/onboarding", req.url));
      }
      return NextResponse.next();
    }

    // If onboarded (or ADMIN), do not allow them to stay on /auth or /onboarding
    if (path.startsWith("/auth") || path.startsWith("/onboarding")) {
      if (role === "ADMIN") return NextResponse.redirect(new URL("/admin", req.url));
      if (role === "INSTRUCTOR") return NextResponse.redirect(new URL("/faculty", req.url));
      return NextResponse.redirect(new URL("/student", req.url));
    }

    // Protect Admin routes
    if (path.startsWith("/admin") && role !== "ADMIN") {
      if (role === "INSTRUCTOR") return NextResponse.redirect(new URL("/faculty", req.url));
      return NextResponse.redirect(new URL("/student", req.url));
    }

    // Protect Faculty routes
    if (path.startsWith("/faculty") && role !== "INSTRUCTOR" && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/student", req.url));
    }

    // Protect Student routes (Ensure faculty and admin don't get trapped here)
    if (path.startsWith("/student") && role === "INSTRUCTOR") {
      return NextResponse.redirect(new URL("/faculty", req.url));
    }
    
    if (path.startsWith("/student") && role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Allow the middleware to run even without a token so we can handle /auth
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/faculty/:path*", "/student/:path*", "/auth", "/onboarding/:path*"],
};
