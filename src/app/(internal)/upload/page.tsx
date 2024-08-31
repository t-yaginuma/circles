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
          heading="Song put"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <CsForm action={uploadFile}>
          <CsStack gap="md">
            <CsFileUploader
              name="artwork"
              label="Artwork"
              type="image"
            ></CsFileUploader>
            <CsInput
              name="songTitle"
              label="Song Title"
              type="text"
              placeholder="Natural Mystic"
            />
            <CsInput
              name="songDescription"
              label="Description"
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
            />
            <CsFileUploader
              name="music"
              label="SongFile"
              type="image"
            ></CsFileUploader>
            <Button className="mt-4">Add music</Button>
          </CsStack>
        </CsForm>
      </CsStack>
    </>
  );
}
