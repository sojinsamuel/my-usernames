"use client";

import dynamic from "next/dynamic";
import { Card, CardBody, Image } from "@nextui-org/react";

import LogOut from "@/components/LogOut";
// import HankoProfile from "@/components/hanko-components/HankoProfile";
const HankoProfile = dynamic(
  () => import("@/components/hanko-components/HankoProfile"),
  {
    ssr: false,
  }
);

export default function Account() {
  return (
    <Card
      isBlurred
      className="max-w-[610px] border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4">
          <div className="relative col-span-10 mx-auto block gap-y-5 text-center md:col-span-4">
            <div className="flex flex-col gap-7">
              <Image
                alt="profile image"
                className="object-cover"
                height={200}
                shadow="md"
                src="./profile.png"
                width="100%"
              />
              <LogOut />
            </div>
          </div>

          <div className="col-span-6 flex flex-col md:col-span-8 ">
            <HankoProfile />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
