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

type Props = {
  trigger?: React.ReactElement;
};

const CsDrawerUserEdit = (props: Props) => {
  const { trigger } = props;

  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <CsForm action={uploadFile}>
          <div className="m-auto w-[640px]">
            <CsStack gap="md">
              <DrawerHeader>
                <DrawerTitle>Update Profile</DrawerTitle>
              </DrawerHeader>
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
            </CsStack>
            <DrawerFooter>
              <CsButton text="Update Profile" />
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

export { CsDrawerUserEdit };
