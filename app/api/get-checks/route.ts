import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    console.log("====================================");
    console.log({ id });
    console.log("====================================");

    const dbUser = await db.username.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        lastCheck: "desc",
      },
    });

    // await db.username.create({
    //   data: {
    //     userId: id,
    //     name: "yourusername",
    //     snapchat: true,
    //     facebook: true,
    //     youtube: true,
    //   },
    // });

    console.log("====================================");
    // console.log({ dbUser });
    console.log("====================================");
    return NextResponse.json(dbUser);
  } catch (error) {
    console.error(error, "from get-check api route");
    return new NextResponse(`Get Check Issue: ${error}`, { status: 500 });
  }
}
