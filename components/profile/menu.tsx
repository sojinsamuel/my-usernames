import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import HankoProfile from "../hanko-components/HankoProfile";

export default function Menu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Profile</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Example with disabled actions"
        onAction={(item) => console.log(item)}
      >
        <DropdownItem key="new">
          <HankoProfile />
        </DropdownItem>
        {/* <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}
