import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, name, account } = body;

  try {
    const user = await account.create("unique()", email, password, name);

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
