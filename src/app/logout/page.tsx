import { CsHeading } from "@/components/circles/CsHeading";
import { CsMain } from "@/components/layouts/CsMain";
import Link from "next/link";

export default function Logout() {
  return (
    <CsMain>
      <CsHeading
        heading="You have signed out. Now go mobile!"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <ul>
        <li>
          <Link href="/">back to top page</Link>
        </li>
      </ul>
    </CsMain>
  );
}
