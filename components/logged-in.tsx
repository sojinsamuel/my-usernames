"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

type UserDetails = { id: string; email: string };

function LoggedIn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
  const [userDetails, setUserDetails] = useState<UserDetails | null>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        if (hanko && hanko.user) {
          const currentUser = await hanko.user.getCurrent();
          setUserDetails(currentUser);
        }
      } catch (error) {
        console.error(error, "logged-in.tsx");
      }
    }

    // Call getCurrentUser only if userDetails is null
    if (!userDetails) {
      getCurrentUser();
    }
  }, [hanko]);

  if (!userDetails) {
    return (
      <Button
        color="primary"
        className="bg-default-100 text-sm font-normal text-default-600"
        startContent={<UserCircleIcon height={30} width={30} />}
        variant="ghost"
        onClick={() => {
          router.push("/login");
        }}
      >
        Login
      </Button>
    );
  }

  return (
    <Button
      color="primary"
      className="bg-default-100 text-sm font-normal text-default-600"
      startContent={<UserCircleIcon height={30} width={30} />}
      variant="ghost"
      onClick={() => {
        router.push("/dashboard");
      }}
    >
      Dashboard
    </Button>
  );
}

export default LoggedIn;
