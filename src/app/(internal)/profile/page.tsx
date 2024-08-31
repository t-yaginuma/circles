import { uploadFile } from "@/actions/files";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { CsForm } from "@/components/circles/CsForm";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsDrawerUserEdit } from "@/components/circles/CsDrawerUserEdit";
import { CsButton } from "@/components/circles/CsButton";
import { CsInput } from "@/components/circles/CsInput";
import { CsMain } from "@/components/layouts/CsMain";
import { CsStack } from "@/components/layouts/CsStack";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <CsMain>
      <CsHeading
        heading="Profile"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
      />
      <CsDrawerUserEdit trigger={<CsButton text="Establish New Circle" />} />
    </CsMain>
  );
}
