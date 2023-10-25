"use client";

import {
  AtSymbolIcon,
  CheckIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Skeleton,
  Badge,
  Avatar,
} from "@nextui-org/react";
import Notification from "../onboarding/notification";
import { useRouter } from "next/navigation";

const CongratsBadge = () => {
  return (
    <Badge
      isOneChar
      content={<CheckIcon />}
      color="success"
      placement="bottom-right"
      size="md"
    >
      <Avatar
        isBordered
        color="success"
        radius="md"
        src="./party-face.webp"
        className="object-contain"
        size="sm"
      />
    </Badge>
  );
};

export default function SearchInput() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [usernameStats, setUsernameStats] = useState<any>("");
  const [result, setResult] = useState(false);
  const router = useRouter();

  const validateUsername = (username: any) => username.match(/^[a-zA-Z0-9_]+$/);

  const isInvalid = useMemo(() => {
    if (username === "") return false;

    return !validateUsername(username);
  }, [username]);

  async function onSubmit() {
    try {
      setLoading(true);
      const res = await fetch("/api/check-availability", {
        method: "POST",
        body: JSON.stringify({
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUsernameStats(data);
      // console.log("====================================");
      // console.log(usernameStats);
      // console.log("====================================");
    } catch (error) {
    } finally {
      setLoading(false);
      setResult(true);
    }
  }

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
    setResult(false);
  };

  useEffect(() => {}, [result]);

  return (
    <div>
      <div className="relative flex">
        <Input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          value={username}
          onValueChange={handleUsernameChange}
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "primary"}
          errorMessage={
            isInvalid &&
            "Woah, username cannot include (@, spaces, hyphens, symbols)"
          }
          aria-label="Search"
          size="lg"
          variant="bordered"
          classNames={{
            inputWrapper: "bg-default-100 md:w-[48vw] w-[70vw] mx-auto ",
            input: "md:text-lg sm:text-md",
          }}
          labelPlacement="outside"
          placeholder="Search social usernames"
          startContent={<AtSymbolIcon width={25} height={25} />}
          type="search"
        />
        <Button
          color="primary"
          variant="shadow"
          className="absolute right-0 top-0 h-[48px]  min-h-fit overflow-y-auto"
          aria-label="Search"
          size="md"
          onClick={onSubmit}
          isLoading={loading}
          isDisabled={isInvalid || username === ""}
        >
          <MagnifyingGlassCircleIcon width={40} height={40} />
        </Button>
      </div>
      {loading && (
        <Table
          hideHeader
          shadow="lg"
          aria-label="Track username availability dynamically"
          className="mt-14"
        >
          <TableHeader>
            <TableColumn>
              <Skeleton className="h-10 w-32 rounded-lg bg-default-300"></Skeleton>
            </TableColumn>
            <TableColumn>
              <Skeleton className="h-10 w-32 rounded-lg bg-default-300"></Skeleton>
            </TableColumn>
            <TableColumn>
              <Skeleton className="h-10 w-32 rounded-lg bg-default-300"></Skeleton>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton className="h-10 w-40 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-40 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-32 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-10 w-40 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-40 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-32 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-10 w-40 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-40 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-32 rounded-lg bg-default-300"></Skeleton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}

      {result && (
        <Table
          hideHeader
          shadow="lg"
          aria-label="Track username availbility dynamically"
          className="mt-14"
        >
          <TableHeader>
            <TableColumn>Username</TableColumn>
            <TableColumn>Available</TableColumn>
            <TableColumn>Get Notified</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className="text-gray-500">snapchat.com/</span>
                {username}
              </TableCell>
              <TableCell
                className={`${
                  usernameStats[1].website === "snapchat" &&
                  usernameStats[1].status > 0
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {usernameStats[1].website === "snapchat" &&
                usernameStats[1].status > 0
                  ? "Available"
                  : "Unavailable"}
              </TableCell>
              <TableCell>
                {usernameStats[1].status > 0 ? (
                  <CongratsBadge />
                ) : (
                  <Button onClick={() => router.push("/dashboard")}>
                    Get notified
                  </Button>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="text-gray-500">facebook.com/</span>
                {username}
              </TableCell>
              <TableCell
                className={`${
                  usernameStats[0].website === "facebook" &&
                  usernameStats[0].status > 0
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {usernameStats[0].website === "facebook" &&
                usernameStats[0].status > 0
                  ? "Available"
                  : "Unavailable"}
              </TableCell>
              <TableCell>
                {usernameStats[0].status > 0 ? (
                  <CongratsBadge />
                ) : (
                  <Button onClick={() => router.push("/dashboard")}>
                    Get notified
                  </Button>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="text-gray-500">youtube.com/</span>
                {username}
              </TableCell>
              <TableCell
                className={`${
                  usernameStats[2].website === "youtube" &&
                  usernameStats[2].status > 0
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {usernameStats[2].website === "youtube" &&
                usernameStats[2].status > 0
                  ? "Available"
                  : "Unavailable"}
              </TableCell>
              <TableCell>
                {usernameStats[2].status > 0 ? (
                  <CongratsBadge />
                ) : (
                  <Button onClick={() => router.push("/dashboard")}>
                    Get notified
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}

      {!result && !loading && <Notification />}
    </div>
  );
}
