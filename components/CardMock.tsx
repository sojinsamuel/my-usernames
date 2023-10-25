import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function CardMock() {
  return (
    <>
      <Skeleton className="w-[150px] rounded-lg">
        <div className="h-8 w-4/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Card className="w-full space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-36 rounded-lg bg-default-300"></div>
        </Skeleton>
      </Card>
      <Skeleton className="w-[150px] rounded-lg">
        <div className="h-8 w-4/5 rounded-lg bg-default-200"></div>
      </Skeleton>

      <Card className="w-full space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-36 rounded-lg bg-default-300"></div>
        </Skeleton>
      </Card>
    </>
  );
}
