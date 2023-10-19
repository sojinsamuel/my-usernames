"use client";

import { Card, Image, CardHeader } from "@nextui-org/react";

const socials = [
  {
    name: "X",
    icon: "./x-logo.webp",
    mockTime: "now",
  },
  {
    name: "Reddit",
    icon: "./reddit-logo.png",
    mockTime: "5 min ago",
  },
  {
    name: "Instagram",
    icon: "./instagram-logo.png",
    mockTime: "12 min ago",
  },
];

interface NotificationCards {
  name: string;
  icon: string;
  mockTime: string;
}

function NotificationCards(props: NotificationCards) {
  return (
    <Card className="max-w-[400px] pr-8  dark:shadow-md dark:shadow-cyan-500/50">
      <CardHeader className="flex gap-3">
        <Image
          alt={props.name}
          height={40}
          radius="sm"
          src={props.icon}
          width={40}
          className="h-10 w-30 object-cover"
        />
        <div className="flex flex-col relative">
          <p className="text-md">New Message</p>
          <p className="text-small text-default-500">
            The username <span className="text-blue-700">@zoe</span> is
            available on {props.name}!
          </p>
        </div>
        <span className="absolute right-4 top-2 font-semibold text-xs">
          {props.mockTime}
        </span>
      </CardHeader>
    </Card>
  );
}

export default function Notification() {
  return (
    <div className="flex flex-col gap-y-5  p-3">
      {socials.map((social, i) => {
        return (
          <div key={`${social}_${i}`} className={`md:ml-${i * 10} ml-0`}>
            <NotificationCards
              name={social.name}
              icon={social.icon}
              mockTime={social.mockTime}
            />
          </div>
        );
      })}
    </div>
  );
}
