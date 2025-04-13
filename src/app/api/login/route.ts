import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Account, Client } from "node-appwrite";

export interface Request {
  method: string;
  body: any;
  headers: Record<string, string>;
}

export interface Response {
  status: (code: number) => Response;
  json: (data: any) => void;
  setHeader: (name: string, value: string) => void;
}

export async function POST(req: Request) {
  const body = await req.body;
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
