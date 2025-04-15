import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const session = req.cookies.get("sessionSecret");
  const pathname = req.nextUrl.pathname;

  if (pathname === "/dashboard" && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if ((pathname === "/login" || pathname === "/register") && session) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard", "/login", "/register"],
};
