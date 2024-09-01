import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CsStack } from "../layouts/CsStack";
import { CsForm } from "./CsForm";
import { CsInput } from "./CsInput";
import { CsFileUploader } from "./CsFileUploader";
import { Button } from "../ui/button";
import { uploadFile } from "@/actions/files";
import { CsButton } from "./CsButton";

type Props = {};

const CsDrawerUploadMusic = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 fixed bottom-8 right-8">
        Put your music
      </DrawerTrigger>
      <DrawerContent>
        <CsForm action={uploadFile}>
          <div className="m-auto w-[640px]">
            <CsStack gap="lg">
              <DrawerHeader>
                <DrawerTitle>Song put</DrawerTitle>
              </DrawerHeader>
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
                <DrawerFooter>
                  <CsButton text="Update Profile" />
                  <DrawerClose asChild>
                    <CsButton text="Cancel" variant="outline" />
                  </DrawerClose>
                </DrawerFooter>
              </CsForm>
            </CsStack>
          </div>
        </CsForm>
      </DrawerContent>
    </Drawer>
  );
};

export { CsDrawerUploadMusic };
