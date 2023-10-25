"use client";

import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { NoSymbolIcon } from "@heroicons/react/24/solid";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

// type UserDetails = { id: string; email: string };

export default function LogOut() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
  // const [userDetails, setUserDetails] = useState<UserDetails | null>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);

  // useEffect(() => {
  //   async function getCurrentUser() {
  //     const currentUser = await hanko?.user.getCurrent();
  //     // setUserDetails(currentUser);
  //   }
  //   if (hanko) return;
  //   getCurrentUser();
  // }, [hanko]);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Button
      startContent={<NoSymbolIcon width={20} height={20} />}
      variant="solid"
      color="danger"
      onClick={logout}
    >
      Logout
    </Button>
  );
}
