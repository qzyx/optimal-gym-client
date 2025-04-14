import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const session = req.cookies.get("appwrite-session")?.value;
  const url = req.nextUrl.clone();
  if (session && url.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
