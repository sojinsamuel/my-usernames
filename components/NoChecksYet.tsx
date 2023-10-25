import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { subtitle } from "./primitives";

function NoChecksYet() {
  return (
    <div className="flex h-[300px] items-center justify-center ">
      <Card className="">
        <CardBody>
          <p className={subtitle()}>
            Start adding the usernames you want to track 🔎
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default NoChecksYet;
