"use client";

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
import { CsFileUploader } from "./CsFileUploader";
import { CsInput } from "./CsInput";
import { CsRadioGroup } from "./CsRadioGroup";
import { CsButton } from "./CsButton";
import { getCircles, postCircles } from "@/actions/circles";
import { useModalStore } from "@/store/modal-handle";

type Props = {};

const CsDrawerEstablishCircle = (props: Props) => {
  const {} = props;
  const storeModal = useModalStore();

  const handleAction = async (formData: FormData) => {
    const test = await postCircles(formData);

    if (test) {
      const circle = await getCircles();
      storeModal.setIsOpenEstablishCircleModal(false);
    }
  };

  const options = [
    {
      id: "public",
      value: "0",
      label: "public",
    },
    {
      id: "private",
      value: "1",
      label: "private",
    },
    {
      id: "invited",
      value: "2",
      label: "invited",
    },
  ];

  return (
    <Drawer
      open={storeModal.isOpenEstablishCircleModal}
      onOpenChange={storeModal.setIsOpenEstablishCircleModal}
    >
      <DrawerContent>
        <CsForm action={handleAction}>
          <div className="m-auto w-[640px] py-8">
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
                  <CsInput
                    name="name"
                    label="Circle Name"
                    type="text"
                    placeholder="Rasta foundation"
                    isRequired
                  />
                  <CsInput
                    name="description"
                    label="Description"
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnai"
                  />
                  <CsFileUploader
                    name="image"
                    label="Circle Artwork"
                    type="image"
                  />
                  {/* <CsInput
                    name="tags"
                    label="tag"
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t"
                  /> */}
                  <CsRadioGroup
                    items={options}
                    defaultValue={options[0].value}
                    name="visibility"
                    label="Visibility"
                    isRequired
                  />
                </CsStack>
              </CsStack>
            </div>
            <DrawerFooter>
              <CsButton type="submit" text="Establish Circle" />
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

export { CsDrawerEstablishCircle };
