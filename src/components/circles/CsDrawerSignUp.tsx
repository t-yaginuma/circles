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

type Props = {
  isInContent?: boolean;
  textTrigger: string;
};

const CsDrawerSignUp = (props: Props) => {
  const { textTrigger, isInContent } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const classNamesTrigger = isInContent
    ? "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline ml-0 mr-auto"
    : "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2";

  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    const test = await signUp(formData);

    if (test) {
      setMessage(test);
    }

    setIsLoading(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className={classNamesTrigger}>{textTrigger}</DrawerTrigger>

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
                  <CsDrawerLogin
                    textTrigger="Already have an account?"
                    isInContent
                    onClick={() => {
                      setIsOpen(false);
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
