import { getUser } from "@/actions/auth";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsTextLink } from "@/components/circles/CsTextLink";
import { CsMain } from "@/components/layouts/CsMain";
import Link from "next/link";

export default function Home() {
  return (
    <CsMain>
      <CsHeading
        heading="Welcome to Circles"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <ul>
        <li>
          <CsTextLink href="/circles" text="Find your Circle" />
        </li>
      </ul>
      <CsHeading
        heading="New Circles"
        level="h2"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n"
      />
      <CsHeading
        heading="Tag"
        level="h2"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n"
      />
      <CsHeading
        heading="Location"
        level="h2"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n"
      />
    </CsMain>
  );
}
