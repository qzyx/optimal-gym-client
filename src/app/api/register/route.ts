import { NextRequest, NextResponse } from "next/server";
import { Users } from "node-appwrite";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, name, client } = body;
  const users = new Users(client);

  try {
    const user = await users.create("unique()", email, password, name);

    return NextResponse.json({
      message: "User registered successfully",
      user,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Registration error:", err);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    console.error("Unknown error occurred during registration:", err);
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 400 }
    );
  }
}
