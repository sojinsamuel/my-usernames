"use client";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import React from "react";
import InfoCard from "./profile/info-card";
import { GithubIcon } from "./icons";

function Footer() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <footer className="mt-5 flex w-full items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
        title="Github Repo"
      >
        <GithubIcon />
      </Link>
      {/* <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
        title="nextui.org homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">NextUI</p>
      </Link> */}
    </footer>
  );
}

export default Footer;
