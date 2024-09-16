"use client";

import { useState, useMemo } from "react";
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
import { CsButton } from "./CsButton";
import { CsComboBox } from "@/components/circles/CsComboBox";
import { CsSelect } from "@/components/circles/CsSelect";
import country from "country-list-js";
import { updateProfile } from "@/actions/profile";
import { useMeStore } from "@/store/me";

type Props = {};

const CsDrawerProfileUpdate = (props: Props) => {
  const {} = props;
  const storeMe = useMeStore();

  const handleAction = async (formData: FormData) => {
    const returnValue = await updateProfile(storeMe.uid, formData);
  };

  const options = useMemo(() => {
    const countries = country.all;
    const keys = Object.keys(countries);
    const rv = keys.sort().map((key) => {
      const country = countries[key];
      return {
        value: country.iso2,
        label: country.name,
      };
    });

    return rv;
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <CsButton type="button" text="Edit Your Profile" variant="link" />
      </DrawerTrigger>

      <DrawerContent>
        <CsForm action={handleAction}>
          <div className="m-auto w-[640px] py-8">
            <CsStack gap="sm">
              <DrawerHeader>
                <DrawerTitle>Update Profile</DrawerTitle>
              </DrawerHeader>
              <CsStack gap="md" className="px-4">
                <CsFileUploader
                  name="image"
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
                  name="description"
                  label="Description"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
                />
                <CsInput
                  name="city"
                  label="City"
                  type="text"
                  placeholder="Vancouver"
                />
                <CsSelect
                  label="Country"
                  name="countryCode"
                  options={options}
                  placeholder="select your country"
                />
              </CsStack>
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

export { CsDrawerProfileUpdate };
