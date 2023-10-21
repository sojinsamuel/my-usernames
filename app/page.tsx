import { title, subtitle } from "@/components/primitives";
import SearchInput from "@/components/form/search";
import SquigglyLines from "@/components/markers/squiggly-lines";
// import Schema from "@/components/schema";
import Notification from "@/components/onboarding/notification";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl grow px-6 pt-16">
      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className="inline-block max-w-lg justify-center text-center">
          <h1 className={title()}>Username&nbsp;</h1>
          <h1 className={title({ color: "pink" })}>Already&nbsp;Taken?</h1>
          <br />
          <h1 className={title()}>
            <span className="relative whitespace-nowrap ">
              <SquigglyLines />
              <span className="relative">Get notified!</span>
            </span>
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            when it becomes available.
          </h2>
        </div>

        <SearchInput />

        <Notification />

        {/* 
      // Table
      <div className="mt-8 w-[60vw]">
        <Schema />
      </div> */}
      </section>
    </div>
  );
}
