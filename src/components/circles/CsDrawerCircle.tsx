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
import { Button } from "../ui/button";
import { CsStack } from "../layouts/CsStack";
import { CsForm } from "./CsForm";
import { uploadFile } from "@/actions/files";
import { CsFileUploader } from "./CsFileUploader";
import { CsInput } from "./CsInput";
import { CsRadioGroup } from "./CsRadioGroup";
import { CsButton } from "./CsButton";

type Props = {};

const CsDrawerCircle = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 fixed bottom-8 right-8">
        Establish New Circle
      </DrawerTrigger>
      <DrawerContent>
        <CsForm action={uploadFile}>
          <div className="m-auto w-[640px]">
            <DrawerHeader>
              <DrawerTitle>Establish New Circle</DrawerTitle>
              <DrawerDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit ess
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <CsStack gap="lg">
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
                  {/* <Button className="mt-4">Establish Your Circle</Button> */}
                </CsStack>
              </CsStack>
            </div>
            <DrawerFooter>
              <CsButton type="submit" text="Login" />
              <DrawerClose asChild>
                <CsButton type="button" text="Cancel" variant="outline" />
              </DrawerClose>
            </DrawerFooter>
          </div>
        </CsForm>
      </DrawerContent>
    </Drawer>
  );
};

export { CsDrawerCircle };
