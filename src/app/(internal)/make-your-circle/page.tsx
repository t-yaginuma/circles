import { uploadFile } from "@/actions/files";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { CsForm } from "@/components/circles/CsForm";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsInput } from "@/components/circles/CsInput";
import { CsRadioGroup } from "@/components/circles/CsRadioGroup";
import { CsStack } from "@/components/layouts/CsStack";
import { Button } from "@/components/ui/button";
import React from "react";

export default function MakeYourCircle() {
  return (
    <>
      <CsStack gap="lg">
        <CsHeading
          heading="Establish new circle!"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l"
        />

        <CsForm action={uploadFile}>
          <CsStack gap="md">
            <CsFileUploader
              name="artwork"
              label="Circle Artwork"
              type="image"
            ></CsFileUploader>
            <CsInput
              name="name"
              label="Circle Name"
              type="text"
              placeholder="Rasta foundation"
            />
            <CsInput
              name="songDescription"
              label="Description"
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnai"
            />
            <CsInput
              name="tags"
              label="tag"
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t"
            />
            <CsRadioGroup name="public" label="Visibility" />
            <Button className="mt-4">Establish Your Circle</Button>
          </CsStack>
        </CsForm>
      </CsStack>
    </>
  );
}
