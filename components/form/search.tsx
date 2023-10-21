"use client";

import {
  AtSymbolIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useMemo, useState } from "react";

export default function SearchInput() {
  const [username, setUsername] = useState("");
  const validateUsername = (username: any) =>
    username.match(/^(?![\s@]*-)[^\s@]+$/);

  const isInvalid = useMemo(() => {
    if (username === "") return false;

    return !validateUsername(username);
  }, [username]);

  function onSubmit() {
    console.log(username);
    setUsername("");
  }

  return (
    <div className="relative flex">
      <Input
        value={username}
        onValueChange={setUsername}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={
          isInvalid &&
          "Woah, username cannot include (@, spaces, hyphens at start/end)"
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
        isDisabled={isInvalid || username === ""}
      >
        <MagnifyingGlassCircleIcon width={40} height={40} />
      </Button>
    </div>
  );
}
