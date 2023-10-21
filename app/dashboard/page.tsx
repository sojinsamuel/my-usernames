"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import { TwitterIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import AddCheck from "@/components/add-check";

const mockData = [
  {
    username: "vincent",
    available: true,
    lastChecked: "5 min ago",
  },
  {
    username: "mathew",
    available: false,
    lastChecked: "10 min ago",
  },
  {
    username: "lia",
    available: false,
    lastChecked: "2h ago",
  },
  {
    username: "kevin",
    available: true,
    lastChecked: "50min ago",
  },
  {
    username: "john",
    available: false,
    lastChecked: "10h ago",
  },
  {
    username: "ravi",
    available: false,
    lastChecked: "3min ago",
  },
];

function AvailabilityCard(props: any) {
  return (
    <>
      <h1 className={`${subtitle()} `}>@{props.username}</h1>
      <Card className="mx-auto md:min-w-[90vh]">
        <CardHeader className="flex items-center justify-center">
          <TwitterIcon size={30} className="mr-2" />
          <div className="flex items-center justify-between gap-6 md:gap-14">
            <p>
              <span className="text-gray-600">twitter.com</span>/
              {props.username}
            </p>
            <p
              className={`${
                props.available ? "text-green-700" : "text-red-700"
              }`}
            >
              {props.available ? "Available 🙌" : "Unavailable"}
            </p>
            <p className="">{props.lastChecked}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardHeader className="flex  justify-center ">
          <TwitterIcon size={30} className="mr-2" />
          <div className="flex items-center justify-between gap-6 md:gap-14">
            <p>
              <span className="text-gray-600">instagram.com</span>/
              {props.username}
            </p>
            <p
              className={`${
                props.available ? "text-green-700" : "text-red-700"
              }`}
            >
              {props.available ? "Available 🙌" : "Unavailable"}
            </p>
            <p>{props.lastChecked}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardHeader className="flex items-center justify-center">
          <TwitterIcon size={30} className="mr-2" />
          <div className="flex items-center justify-between gap-6 md:gap-14">
            <p>
              <span className="text-gray-600">reddit.com/user</span>/
              {props.username}
            </p>
            <p
              className={`${
                props.available ? "text-green-700" : "text-red-700"
              }`}
            >
              {props.available ? "Available 🙌" : "Unavailable"}
            </p>
            <p>{props.lastChecked}</p>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-[100vw] md:min-w-[50vw]">
        <h1 className={`${title()} ml-5 mt-5 flex items-start justify-start `}>
          Checks
        </h1>
        <div className="mr-5  flex items-start justify-start">
          <p
            className={`${subtitle()} ml-5 mt-5 flex items-start justify-start`}
          >
            We&apos;ll notify you if any becomes available
          </p>
          <AddCheck />
        </div>
        <ScrollShadow className="h-[400px]">
          <CardBody className="space-y-5">
            {mockData.map((item, i) => {
              return (
                <AvailabilityCard
                  key={`${item.username}_${i}`}
                  username={item.username}
                  available={item.available}
                  lastChecked={item.lastChecked}
                />
              );
            })}
          </CardBody>
        </ScrollShadow>
      </Card>
    </div>
  );
}
