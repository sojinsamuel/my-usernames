/* eslint-disable array-callback-return */
import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, username, socials } = await req.json();

    const availability = await fetch(
      `${process.env.HOST}/api/check-availability`,
      {
        method: "POST",
        body: JSON.stringify({
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await availability.json();
    // console.log("====================================");
    // console.log(data);
    // console.log("====================================");

    /*
      [{
       "website": "facebook",
      "status": 1
      },
      {
       "website": "youtube",
      "status": 0
      },
      {
       "website": "snapchat",
      "status": 1
      }]
     */
    // facebook, snapchat, youtube
    const selectedSocials = Object.keys(socials).filter((key) => socials[key]);
    // console.log("====================================");
    // console.log({ selectedSocials });
    // console.log("====================================");
    // // eslint-disable-next-line array-callback-return
    const checks = data.filter(({ website, status }: any) => {
      // facebook
      if (selectedSocials.includes(website)) {
        return {
          [website]: status === 1,
        };
      }
    });

    const dbUser = await db.username.create({
      data: {
        userId: id,
        name: username,
        snapchat: socials.snapchat,
        facebook: socials.facebook,
        youtube: socials.youtube,
        check: {
          checks,
        },
      },
    });

    // console.log("====================================");
    // console.log({ dbUser });
    // console.log("====================================");
    return NextResponse.json(dbUser);
  } catch (error) {
    console.error(error);
    return new NextResponse(`Add Check Issue ${error}`, { status: 500 });
  }
}
