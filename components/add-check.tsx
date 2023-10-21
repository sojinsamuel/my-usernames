import React, { useMemo, useState } from "react";
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

export default function AddCheck() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [username, setUsername] = useState("");

  const [checkboxes, setCheckboxes] = useState({
    instagram: false,
    reddit: false,
    X: false,
  });

  const validateUsername = (username: any) =>
    username.match(/^(?![\s@]*-)[^\s@]+$/);

  const isInvalid = useMemo(() => {
    if (username === "") return false;

    return !validateUsername(username);
  }, [username]);

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  function onSubmit() {
    console.log(username);
    console.log(JSON.stringify(checkboxes));
    setUsername("");
    setCheckboxes({
      instagram: false,
      reddit: false,
      X: false,
    });
  }

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
                    name="X"
                    onChange={handleCheckboxChange}
                    checked={checkboxes.X}
                    classNames={{
                      label: "text-lg pr-6",
                    }}
                  >
                    X
                  </Checkbox>
                  <Checkbox
                    name="instagram"
                    onChange={handleCheckboxChange}
                    classNames={{
                      label: "text-lg pr-6",
                    }}
                  >
                    Instagram
                  </Checkbox>
                  <Checkbox
                    name="reddit"
                    onChange={handleCheckboxChange}
                    classNames={{
                      label: "text-lg",
                    }}
                  >
                    Reddit
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={onSubmit}
                  isDisabled={
                    username.length === 0 ||
                    !Object.values(checkboxes).includes(true) ||
                    isInvalid
                  }
                  onPress={onClose}
                >
                  Save Check
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
