import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  console.log("Logout API called");
  try {
    (await cookies()).set({
      name: "sessionSecret",
      value: "",
      httpOnly: true,
      path: "/",
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
