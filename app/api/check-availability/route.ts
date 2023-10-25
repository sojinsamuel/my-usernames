// import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username } = await req.json();

    const { API_PSWD, API_ACC_NAME } = process.env;

    const url = `https://checkmarks.com/api/v1/username/${username}/account/${API_ACC_NAME}/password/${API_PSWD}`;

    const res = await fetch(url);
    const data = await res.json();

    const filteredData = data.filter((item: any) =>
      ["facebook", "snapchat", "youtube"].includes(item.website)
    );

    console.log("====================================");
    // console.log({ filteredData });
    console.log("====================================");

    // const dbUser = await db.username.findFirst({
    //   where: {
    //     userId: id,
    //   },
    // });

    // console.log("====================================");
    // console.log({ dbUser });
    // console.log("====================================");
    return NextResponse.json(filteredData);
  } catch (error) {
    console.error(error);
    return new NextResponse("Add Check Issue", { status: 500 });
  }
}
