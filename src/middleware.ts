import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!token) {
    if (request.nextUrl.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
}

export const config = {
  matcher: ["/login", "/admin", "/access", "/user/:path", "/"],
};
