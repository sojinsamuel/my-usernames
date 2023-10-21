import { PropsWithChildren, useState, useEffect } from "react";
import { hanko } from "@/config/hankoInit";

type UserDetails = { id: string; email: string };

function HankoProvider({ children }: PropsWithChildren) {
  const [userDetails, setUserDetails] = useState<UserDetails | null>();

  useEffect(() => {
    async function getCurrentUser() {
      const currentUser = await hanko?.user.getCurrent();
      setUserDetails(currentUser);
    }
    if (userDetails) return;
    getCurrentUser();
  }, [userDetails]);

  return <div>HankoProvider</div>;
}

export default HankoProvider;
