/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  ScrollShadow,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { subtitle, title } from "@/components/primitives";
import AddCheck from "@/components/add-check";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
import { timeAgo } from "@/utils/time";
import CardMock from "@/components/CardMock";
import NoChecksYet from "@/components/NoChecksYet";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;
const hanko = new Hanko(hankoApi);

function AvailabilityCard(props: any) {
  const { availables, username } = props;
  console.log("====================================");
  console.log(availables, username);
  console.log("====================================");
  return (
    <>
      <h1 className={`${subtitle()} `}>@{props.username}</h1>
      <Table
        hideHeader
        shadow="lg"
        aria-label="Track username availbility dynamically"
      >
        <TableHeader>
          <TableColumn>Username</TableColumn>
          <TableColumn>Available</TableColumn>
          <TableColumn>Last Checked</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="text-gray-500">snapchat.com/</span>
              {props.username}
            </TableCell>
            <TableCell
              className={`${
                props.available ? "text-green-700" : "text-red-700"
              }`}
            >
              {props.available ? "Available" : "Unavailable"}
            </TableCell>
            <TableCell>{timeAgo(props.lastChecked)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="text-gray-500">facebook.com/</span>
              {props.username}
            </TableCell>
            <TableCell
              className={`${
                props.available ? "text-green-700" : "text-red-700"
              }`}
            >
              {props.available ? "Available" : "Unavailable"}
            </TableCell>
            <TableCell>{timeAgo(props.lastChecked)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="text-gray-500">youtube.com/</span>
              {props.username}
            </TableCell>
            <TableCell
              className={`${
                props.available ? "text-green-700" : "text-red-700"
              }`}
            >
              {props.available ? "Available" : "Unavailable"}
            </TableCell>
            <TableCell>{timeAgo(props.lastChecked)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default function Dashboard() {
  const [userId, setUserId] = useState("");
  const [usernameStats, setUsernameStats] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  async function getCurrentUser() {
    const currentUser = await hanko?.user.getCurrent();
    setUserId(currentUser?.id);
    const res = await fetch("/api/user-in-db", {
      method: "POST",
      body: JSON.stringify({
        id: currentUser?.id,
        email: currentUser?.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dbUser = await res.json();
    // console.log("====================================");
    // console.log(dbUser);
    // console.log("====================================");
    if (!dbUser) {
      router.push("/auth-callback?origin=dashboard");
    }
    return true;
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    async function getChecks() {
      setLoading(true);
      try {
        const res = await fetch("/api/get-checks", {
          method: "POST",
          body: JSON.stringify({
            id: userId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log("Fetched", { data });
        setUsernameStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log({ usernameStats });
        setLoading(false);
      }
    }
    getChecks();
  }, [userId]);

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
          {/* @ts-ignore */}
          <AddCheck id={userId} setUsernameStats={setUsernameStats} />
        </div>
        <ScrollShadow className="h-[400px]">
          <CardBody className="space-y-5">
            {usernameStats.length === 0 && loading && <CardMock />}
            {usernameStats.length === 0 && !loading && <NoChecksYet />}
            {usernameStats?.map((item: any, i: number) => {
              return (
                <AvailabilityCard
                  key={`${item.id}_${i}`}
                  username={item.name}
                  available={item.available}
                  lastChecked={item.lastCheck}
                  availables={item.check.checks}
                />
              );
            })}
          </CardBody>
        </ScrollShadow>
      </Card>
    </div>
  );
}
