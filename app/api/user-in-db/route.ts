import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const dbUser = await db.user.findFirst({
      where: {
        id,
      },
    });

    return NextResponse.json(dbUser);
  } catch (error) {
    console.error(error);
    return new NextResponse("User Synchronization Error", { status: 500 });
  }
}
