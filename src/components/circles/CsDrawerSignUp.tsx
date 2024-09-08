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
import { CsStack } from "../layouts/CsStack";
import { CsForm } from "./CsForm";
import { CsInput } from "./CsInput";
import { signUp } from "@/actions/auth";
import { CsTextLink } from "./CsTextLink";
import { CsButton } from "./CsButton";
import { CsCheckbox } from "./CsCheckbox";
import { CsDrawerLogin } from "./CsDrawerLogin";
import { useState } from "react";
import { useModalStore } from "@/store/modal-handle";

type Props = {};

const CsDrawerSignUp = (props: Props) => {
  const {} = props;
  const store = useModalStore();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    const test = await signUp(formData);
    setIsLoading(false);
  };

  return (
    <Drawer
      open={store.isOpenSignUpModal}
      onOpenChange={store.setIsOpenSignUpModal}
    >
      <DrawerContent>
        <CsForm action={handleAction}>
          <div className="m-auto w-[640px] py-8">
            <CsStack gap="sm">
              <DrawerHeader>
                <DrawerTitle className="text-xl">
                  Sign up for a Circles account
                </DrawerTitle>
              </DrawerHeader>

              <CsStack gap="md" className="px-4">
                <CsStack gap="md">
                  <CsInput
                    name="email"
                    label="Mail Address"
                    type="email"
                    placeholder="rasta-man@circles.com"
                    autoComplete="off"
                    isRequired
                  />
                  <CsInput
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    isRequired
                  />
                </CsStack>
                <CsStack gap="sm">
                  <CsCheckbox
                    id="checkbox-term"
                    checked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e as boolean);
                    }}
                    label={
                      <div>
                        I have read and agree to the
                        <CsTextLink
                          text="Terms of Use"
                          href="/terms-of-use"
                          className="ml-1"
                          isTargetBlank
                        />
                        .
                      </div>
                    }
                  />
                </CsStack>

                <CsStack gap="xs">
                  <CsTextLink
                    text="Already have an account?"
                    href="#"
                    onClick={() => {
                      store.setIsOpenSignUpModal(false);
                      store.setIsOpenLoginModal(true);
                    }}
                  />
                </CsStack>

                <p>{message}</p>
              </CsStack>

              <DrawerFooter>
                <CsButton
                  type="submit"
                  text="Sign up"
                  isDisabled={!isChecked}
                  isLoading={isLoading}
                />
                <DrawerClose asChild>
                  <CsButton type="button" text="Cancel" variant="outline" />
                </DrawerClose>
              </DrawerFooter>
            </CsStack>
          </div>
        </CsForm>
      </DrawerContent>
    </Drawer>
  );
};

export { CsDrawerSignUp };
