import { CsHeading } from "@/components/circles/CsHeading";
import { CsDrawerUserEdit } from "@/components/circles/CsDrawerUserEdit";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";

export default async function Profile() {
  const { isAuthenticated } = await useGetUser();

  return (
    <CsRootLayoutInternal
      isAuthenticated={isAuthenticated}
      currentPage="dashboard"
    >
      <CsMain>
        <CsHeading
          heading="Profile"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
        />
        <CsDrawerUserEdit />
      </CsMain>
    </CsRootLayoutInternal>
  );
}
