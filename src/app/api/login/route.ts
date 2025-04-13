import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const sessionId = body.sessionId;
  try {
    (await cookies()).set({
      name: "sessionSecret",
      value: sessionId,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ message: "Logged in and session Stored" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
