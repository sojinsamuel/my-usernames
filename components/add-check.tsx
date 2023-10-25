/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";

import { UserIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function AddCheck({ id, setUsernameStats }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    snapchat: false,
    facebook: false,
    youtube: false,
  });

  const validateUsername = (username: any) => username.match(/^[a-zA-Z0-9_]+$/);

  const isInvalid = useMemo(() => {
    if (username === "") return false;

    return !validateUsername(username);
  }, [username]);

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  async function onSubmit(closeModal: () => void) {
    // console.log(username);
    // console.log(JSON.stringify(checkboxes));
    try {
      setLoading(true);
      const res = await fetch("/api/add-check", {
        method: "POST",
        body: JSON.stringify({
          id,
          username,
          socials: checkboxes,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // eslint-disable-next-line no-unused-vars
      const data = await res.json();
      // console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      closeModal();
      setUsername("");
      setCheckboxes({
        facebook: false,
        snapchat: false,
        youtube: false,
      });
    }
  }

  useEffect(() => {
    async function getChecks() {
      try {
        const res = await fetch("/api/get-checks", {
          method: "POST",
          body: JSON.stringify({
            id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log("====================================");
        console.log("Fetched", { data });
        console.log("====================================");
        setUsernameStats(data);
      } catch (error) {
        console.error(error);
      }
    }
    getChecks();
  }, [loading]);

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<PlusIcon width={80} height={80} />}
        className="font-bold"
      >
        Add Check
      </Button>
      <Modal
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a check
              </ModalHeader>
              <ModalBody>
                <Input
                  value={username}
                  onValueChange={setUsername}
                  autoFocus
                  isInvalid={isInvalid}
                  color={isInvalid ? "danger" : "success"}
                  errorMessage={
                    isInvalid &&
                    "Woah, username cannot include (@, emojis, spaces, hyphens)"
                  }
                  endContent={
                    <UserIcon
                      width={20}
                      height={20}
                      className="pointer-events-none shrink-0 text-2xl text-default-400"
                    />
                  }
                  label="Username"
                  placeholder="zoe"
                  variant="bordered"
                  startContent="@"
                />

                <div className="flex py-2 ">
                  <Checkbox
                    name="facebook"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.facebook}
                    classNames={{
                      label: "text-lg pr-6",
                    }}
                  >
                    Facebook
                  </Checkbox>
                  <Checkbox
                    name="snapchat"
                    onChange={handleCheckboxChange}
                    classNames={{
                      label: "text-lg pr-6",
                    }}
                  >
                    Snapchat
                  </Checkbox>
                  <Checkbox
                    name="youtube"
                    onChange={handleCheckboxChange}
                    classNames={{
                      label: "text-lg",
                    }}
                  >
                    Youtube
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => onSubmit(onClose)}
                  isDisabled={
                    username.length === 0 ||
                    !Object.values(checkboxes).includes(true) ||
                    isInvalid
                  }
                  isLoading={loading}
                >
                  {loading ? "Saving and checking..." : "Save and check"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
