import {
  AtSymbolIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function SearchInput() {
  return (
    <div className="flex relative">
      <Input
        aria-label="Search"
        size="lg"
        variant="bordered"
        classNames={{
          inputWrapper: "bg-default-100 md:w-[50vw] sm:w-[70vw] mx-auto ",
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
        className="absolute right-0 top-0 h-full overflow-y-auto"
        aria-label="Search"
        size="md"
      >
        <MagnifyingGlassCircleIcon width={40} height={40} />
      </Button>
    </div>
  );
}
