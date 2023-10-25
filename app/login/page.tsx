"use client";

import dynamic from "next/dynamic";
import { Card, CardBody } from "@nextui-org/react";
import { title } from "@/components/primitives";
import SquigglyLines from "@/components/markers/squiggly-lines";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "@nextui-org/link";

const HankoAuth = dynamic(
  () => import("@/components/hanko-components/HankoAuth"),
  {
    ssr: false,
  }
);

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center overflow-hidden md:grid-cols-2 ">
      <Card
        isBlurred
        shadow="sm"
        radius="none"
        className="flex  h-0 w-0  flex-col items-center justify-center border-none bg-white leading-10 dark:bg-black md:h-full md:w-full"
      >
        <CardBody className="relative flex items-center justify-center opacity-100 ">
          <div className="absolute left-6 top-5">
            <Link
              href="/"
              color="foreground"
              showAnchorIcon
              underline="always"
              anchorIcon={
                <DocumentMagnifyingGlassIcon height={50} width={50} />
              }
            >
              <p className=" font-bold ">Available</p>
            </Link>
          </div>
          <div className=" max-w-lg items-center  text-center">
            <h1 className={title()}>The Fastest way&nbsp;</h1>
            <br />
            <h1 className={title()}>to be&nbsp;notified!</h1>
            <br />
            <h1 className={title()}>When your&nbsp;</h1>
            <br />

            <h1 className={title({ color: "violet" })}>Username</h1>
            <br />

            <h2 className={title()}>Becomes</h2>
            <h1 className={title()}>
              <span className="relative whitespace-nowrap ">
                <SquigglyLines />
                <span className="relative">&nbsp;Available.</span>
              </span>
            </h1>
          </div>
        </CardBody>
      </Card>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#5EA2EF] to-[#0072F5]">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-black">Welcome back</h1>
          <p className="text-gray-200">Sign in to your account to continue</p>
          <div className="w-[350px] ">
            <HankoAuth />
          </div>
        </div>
      </div>
    </div>
  );
}
