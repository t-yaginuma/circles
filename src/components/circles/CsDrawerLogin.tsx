"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CsStack } from "../layouts/CsStack";
import { CsForm } from "./CsForm";
import { CsInput } from "./CsInput";
import { login } from "@/actions/auth";
import { CsButton } from "./CsButton";
import { CsTextLink } from "./CsTextLink";
import { useToast } from "@/hooks/use-toast";
import { useModalStore } from "@/store/modal-handle";
import { useMeStore } from "@/store/me";

type Props = {};

const CsDrawerLogin = (props: Props) => {
  const {} = props;
  const storeModal = useModalStore();
  const { toast } = useToast();
  const storeMe = useMeStore();

  const handleAction = async (formData: FormData) => {
    const profile = await login(formData);
    console.log(profile);
    if (profile && profile.id) {
      storeModal.setIsOpenLoginModal(false);
      storeMe.setUid(profile.id);
      storeMe.setImage(profile.image);

      toast({
        title: "Logged-in Successfully!",
        // description: "Friday, February 10, 2023 at 5:57 PM",
      });
    }
    // console.log("start");
    // if (test === "success") {
    //   const user = getUser();
    //   user.then((test) => {
    //     console.log("hit");
    //     console.log(storeAuth);
    //     storeAuth.setloginUserId(true);
    //     storeModal.setIsOpenLoginModal(false);
    //     console.log(storeAuth.loginUserId);
    //     toast({
    //       title: "Logged-in Successfully!",
    //       // description: "Friday, February 10, 2023 at 5:57 PM",
    //     });
    //   });
    // } else if (test.code) {
    //   console.log("error");
    //   console.log(test);
    //   setMessage(test.code);
    // }
  };

  return (
    <Drawer
      open={storeModal.isOpenLoginModal}
      onOpenChange={storeModal.setIsOpenLoginModal}
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
                      storeModal.setIsOpenLoginModal(false);
                      storeModal.setIsOpenSignUpModal(true);
                    }}
                  />
                  <CsTextLink
                    text="Forgot Password?"
                    href="#"
                    onClick={() => {
                      storeModal.setIsOpenLoginModal(false);
                      storeModal.setIsOpenPasswordReIssueModal(true);
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
