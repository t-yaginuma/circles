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

type Props = {
  title: string;
  description?: string;
  trigger?: React.ReactElement;
  children?: React.ReactElement;
};

const CsDrawerSignUp = (props: Props) => {
  const { trigger } = props;

  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
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
