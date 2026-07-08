import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // If accessing auth page while logged in, redirect to dashboard
    if (path.startsWith("/auth")) {
      if (token) {
        if (token.role === "ADMIN") return NextResponse.redirect(new URL("/admin", req.url));
        if (token.role === "INSTRUCTOR") return NextResponse.redirect(new URL("/faculty", req.url));
        return NextResponse.redirect(new URL("/student", req.url));
      }
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    const role = token.role; // "STUDENT", "INSTRUCTOR", "ADMIN"

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
  matcher: ["/admin/:path*", "/faculty/:path*", "/student/:path*", "/auth"],
};
