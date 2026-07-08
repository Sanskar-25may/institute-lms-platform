import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Admin routes protection
    if (path.startsWith("/admin") && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/student", req.url));
    }

    // Faculty routes protection
    if (path.startsWith("/faculty") && token?.role !== "INSTRUCTOR" && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/student", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/faculty/:path*", "/student/:path*"],
};
