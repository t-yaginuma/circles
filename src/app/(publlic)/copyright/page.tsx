import { CsHeading } from "@/components/circles/CsHeading";
import { CsTextLink } from "@/components/circles/CsTextLink";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRootLayout } from "@/components/layouts/CsRootLayout";
import useGetUser from "@/hooks/use-get-user";

export default async function Logout() {
  const { isAuthenticated } = await useGetUser();
  return (
    <CsRootLayout isAuthenticated={isAuthenticated}>
      <CsMain>
        <CsHeading
          heading="Copyright"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <ul>
          <li>
            <CsTextLink href="/" text="back to top page" />
          </li>
        </ul>
      </CsMain>
    </CsRootLayout>
  );
}
