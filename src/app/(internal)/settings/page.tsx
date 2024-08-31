import { uploadFile } from "@/actions/files";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { CsForm } from "@/components/circles/CsForm";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsInput } from "@/components/circles/CsInput";
import { CsMain } from "@/components/layouts/CsMain";
import { CsStack } from "@/components/layouts/CsStack";
import { Button } from "@/components/ui/button";

export default function Setting() {
  return (
    <CsMain>
      <CsHeading
        heading="Setting"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
      />
      <CsStack gap="lg">
        <CsForm action={uploadFile}>
          <CsStack gap="md">
            <CsFileUploader
              name="Image"
              label="Image"
              type="image"
            ></CsFileUploader>
            <CsInput
              name="artistName"
              label="Artist Name"
              type="text"
              placeholder="Yagi"
            />
            <CsInput
              name="songDescription"
              label="Description"
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
            />
            <CsInput
              name="location"
              label="Location"
              type="text"
              placeholder="Vancouver"
            />
            <Button className="mt-4">Update Profile</Button>
          </CsStack>
        </CsForm>
      </CsStack>
    </CsMain>
  );
}
