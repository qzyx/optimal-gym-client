import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const session = req.cookies.get("appwrite-session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to these paths
};
