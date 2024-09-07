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
import { useEffect, useState } from "react";
import { CsDrawerSignUp } from "@/components/circles/CsDrawerSignUp";
import { useToast } from "@/hooks/use-toast";
import { useStore } from "@/store/zustand";

type Props = {};

const CsDrawerLogin = (props: Props) => {
  const {} = props;
  const store = useStore();
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleAction = async (formData: FormData) => {
    const test = await signIn(formData);
    console.log("start");

    if (test === "success") {
      const user = getUser();
      user.then((test) => {
        console.log("-------------");

        store.setIsAuthenticated(true);
        store.setIsLoginModalOpen(false);

        toast({
          title: "Logged-in Successfully!",
          // description: "Friday, February 10, 2023 at 5:57 PM",
        });
      });
    } else if (test.code) {
      setMessage(test.code);
    }
  };

  return (
    <Drawer
      open={store.isLoginModalOpen}
      onOpenChange={store.setIsLoginModalOpen}
    >
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
                <CsStack>
                  <CsTextLink
                    text="Don’t have an account?"
                    href="#"
                    onClick={() => {
                      store.setIsLoginModalOpen(false);
                      store.setIsSignUpModalOpen(true);
                    }}
                  />
                  <CsTextLink
                    text="Forgot Password?"
                    href="#"
                    onClick={() => {
                      store.setIsLoginModalOpen(false);
                      store.setIsChangePwModalOpen(true);
                    }}
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
