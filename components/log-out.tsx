"use client";

import { useRouter } from "next/navigation";
import { hanko } from "@/config/hankoInit";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { NoSymbolIcon } from "@heroicons/react/24/solid";
type UserDetails = { id: string; email: string };

export function LogoutBtn() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetails | null>();

  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await hanko?.user.getCurrent();
      setUserDetails(currentUser);
    }
    if (userDetails) return;
    getCurrentUser();
  }, [userDetails]);

  async function logger(location: string) {
    console.log(
      `${location}--- \nuser-id: ${userDetails?.id}, email: ${userDetails?.email}`
    );
  }

  if (userDetails) logger("plane");

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
      className=""
      variant="solid"
      color="danger"
      onClick={logout}
    >
      Logout
    </Button>
  );
}
