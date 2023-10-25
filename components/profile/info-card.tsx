"use client";

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
  Button,
} from "@nextui-org/react";

export default function InfoCard() {
  return (
    <Popover
      showArrow
      placement="bottom"
      backdrop="opaque"
      classNames={{
        base: "py-3 px-4 border border-default-200 bg-gradient-to-br from-white to-default-300 dark:from-default-100 dark:to-default-50 ",
        arrow: "bg-default-200",
      }}
    >
      <PopoverTrigger>
        <User
          as="button"
          name="Reminder"
          description="You got a message from the creator"
          className="animate-bounce transition-transform"
          avatarProps={{
            src: "https://image.similarpng.com/very-thumbnail/2020/08/Notification-bell-icon-vector-PNG.png",
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <div className=" px-1 py-2">
          <div className="max-w-sm text-small font-bold">
            The API uses exact match search and will return results for the
            EXACT username as entered{" "}
            <Button size="sm" color="primary" className="">
              Okay
            </Button>
          </div>
        </div>{" "}
      </PopoverContent>
    </Popover>
  );
}
