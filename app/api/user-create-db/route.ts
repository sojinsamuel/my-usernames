import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, email } = await req.json();

    const dbUser = await db.user.create({
      data: {
        id,
        email,
      },
    });
    console.log("====================================");
    // console.log({ dbUser });
    console.log("====================================");
    return NextResponse.json(dbUser);
  } catch (error) {
    console.error(error);
    return new NextResponse("User Creation Error", { status: 500 });
  }
}
