"use client";

import { Card, Image, CardHeader } from "@nextui-org/react";

const socials = [
  {
    name: "Youtube",
    icon: "./youtube-logo.png",
    mockTime: "now",
  },
  {
    name: "Facebook",
    icon: "./facebook-logo.webp",
    mockTime: "5 min ago",
  },
  {
    name: "Snapchat",
    icon: "./snapchat-logo.png",
    mockTime: "12 min ago",
  },
];

interface NotificationCardsProps {
  name: string;
  icon: string;
  mockTime: string;
  pushRight: number;
}

function NotificationCards(props: NotificationCardsProps) {
  return (
    <Card
      className={`no-left-margin max-w-[400px]  pr-8 dark:shadow-md dark:shadow-cyan-500/50`}
      style={{
        marginLeft: `${props.pushRight}vmin`,
      }}
    >
      <CardHeader className="flex gap-3">
        <Image
          alt={props.name}
          height={40}
          radius="sm"
          src={props.icon}
          width={40}
          className="h-10 w-32 object-cover"
        />
        <div className="relative flex flex-col">
          <p className="text-medium">New Message</p>
          <p className="text-small text-default-500">
            The username <span className="text-blue-700">@zoe</span> is
            available on {props.name}!
          </p>
        </div>
        <span className="absolute right-4 top-2 text-xs font-semibold">
          {props.mockTime}
        </span>
      </CardHeader>
    </Card>
  );
}

export default function Notification() {
  return (
    <div className="mt-5 flex flex-col  items-center justify-center gap-y-5 p-3">
      {socials.map((social, i) => {
        return (
          <NotificationCards
            name={social.name}
            icon={social.icon}
            mockTime={social.mockTime}
            pushRight={i * 10}
            key={`${social.name}_${i}`}
          />
        );
      })}
    </div>
  );
}
