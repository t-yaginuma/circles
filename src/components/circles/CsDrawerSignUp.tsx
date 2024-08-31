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
import { signIn } from "@/actions/auth";
import { CsTextLink } from "./CsTextLink";
import { CsButton } from "./CsButton";
import { CsCheckbox } from "./CsCheckbox";

type Props = {};

const CsDrawerSignUp = (props: Props) => {
  const {} = props;

  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
        Sign up
      </DrawerTrigger>

      <DrawerContent>
        <CsForm action={signIn}>
          <div className="m-auto w-[640px]">
            <CsStack gap="md">
              <DrawerHeader>
                <DrawerTitle>Sign up for a Circles account</DrawerTitle>
              </DrawerHeader>
              <CsStack className="px-4" gap="sm">
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
                <CsCheckbox label="I have read and agree to the Terms of Use." />
                <CsTextLink text="Terms of Use." href="#" />
              </CsStack>
              <CsStack className="px-4 justify-start" gap="xs">
                <CsTextLink text="Already have an account? Log in." href="#" />
              </CsStack>

              <DrawerFooter>
                <CsButton text="Login" />
                <DrawerClose asChild>
                  <CsButton text="Cancel" variant="outline" />
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
