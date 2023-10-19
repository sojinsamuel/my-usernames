"use client";

import HankoAuth from "@/components/hanko-components/HankoAuth";
import { Card, CardBody } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { subtitle, title } from "@/components/primitives";
import SquigglyLines from "@/components/marker";
import {
  DocumentMagnifyingGlassIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@nextui-org/link";

export default function LoginPage() {
  const pathname = usePathname();
  if (pathname !== "/login") return null;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center min-h-screen overflow-hidden ">
      <Card
        isBlurred
        shadow="sm"
        radius="none"
        className="border-none  md:w-full md:h-full  w-0 h-0 leading-10 flex flex-col justify-center items-center "
      >
        <CardBody className="flex justify-center items-center relative ">
          <div className="absolute top-5 left-6">
            <Link
              href="/"
              color="foreground"
              showAnchorIcon
              underline="always"
              anchorIcon={
                <DocumentMagnifyingGlassIcon height={50} width={50} />
              }
            >
              <p className="font-bold text-inherit">Available</p>
            </Link>
          </div>
          <div className=" max-w-lg text-center  items-center">
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
      <div className="flex items-center justify-center bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] min-h-screen">
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
