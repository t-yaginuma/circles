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
import { CsButton } from "./CsButton";

type Props = {};

const CsDrawerUserEdit = (props: Props) => {
  const {} = props;
  const actionHandle = (formData: FormData) => {
    console.log(formData);
  };
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 fixed bottom-8 right-8">
        Edit Profile
      </DrawerTrigger>
      <DrawerContent>
        <CsForm>
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
              <CsButton type="submit" text="Update Profile" />
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

export { CsDrawerUserEdit };
