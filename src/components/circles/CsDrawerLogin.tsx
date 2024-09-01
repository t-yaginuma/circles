"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CsStack } from "../layouts/CsStack";
import { CsForm } from "./CsForm";
import { CsInput } from "./CsInput";
import { signIn, getUser } from "@/actions/auth";
import { CsButton } from "./CsButton";
import { CsTextLink } from "./CsTextLink";
import { useState } from "react";
import { CsDrawerSignUp } from "@/components/circles/CsDrawerSignUp";
import { useToast } from "@/hooks/use-toast";

type Props = {
  textTrigger: string;
  isInContent?: boolean;
  onClick?: () => void;
};

const CsDrawerLogin = (props: Props) => {
  const { isInContent, textTrigger, onClick } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const classNamesTrigger = isInContent
    ? "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline ml-0 mr-auto"
    : "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2";

  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    console.log("start");
    console.log(isLoading);
    const test = await signIn(formData);

    if (test === "success") {
      const user = getUser();
      user.then((test) => {
        console.log("-------------");
        console.log(test);

        toast({
          title: "Logged-in Successfully!",
          // description: "Friday, February 10, 2023 at 5:57 PM",
        });
      });
    } else if (test.code) {
      setMessage(test.code);
    }

    setIsLoading(false);
  };

  return (
    <Drawer>
      <DrawerTrigger onClick={onClick} className={classNamesTrigger}>
        {textTrigger}
      </DrawerTrigger>
      <DrawerContent>
        <CsForm action={handleAction}>
          <div className="m-auto w-[640px] py-8">
            <CsStack gap="sm">
              <DrawerHeader>
                <DrawerTitle className="text-xl">Login</DrawerTitle>
              </DrawerHeader>
              <CsStack gap="md" className="px-4">
                <CsStack gap="md">
                  <CsInput
                    name="email"
                    label="Mail Address"
                    type="email"
                    placeholder="rasta-man@circles.com"
                    isRequired
                  />
                  <CsInput
                    name="password"
                    label="Password"
                    type="password"
                    isRequired
                  />
                </CsStack>
                <CsStack gap="xs">
                  {/* <CsTextLink text="Forgot your password?" href="#" /> */}
                  <CsDrawerSignUp
                    textTrigger="Don’t have an account?"
                    isInContent
                  />
                </CsStack>
              </CsStack>

              <DrawerFooter>
                <CsButton type="submit" text="Login" />
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

export { CsDrawerLogin };
