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
      <DrawerTrigger>
        <CsButton
          className="fixed bottom-8 right-8"
          text="Establish New Circle"
        />
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
              <CsButton text="Login" />
              <DrawerClose asChild>
                <CsButton text="Cancel" variant="outline" />
              </DrawerClose>
            </DrawerFooter>
          </div>
        </CsForm>
      </DrawerContent>
    </Drawer>
  );
};

export { CsDrawerCircle };
