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
import { signIn } from "@/actions/auth";
import { CsButton } from "./CsButton";
import { CsTextLink } from "./CsTextLink";

type Props = {
  trigger?: React.ReactElement;
};

const CsDrawerLogin = (props: Props) => {
  const { trigger } = props;

  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <CsForm action={signIn}>
          <div className="m-auto w-[640px]">
            <CsStack gap="md">
              <DrawerHeader>
                <DrawerTitle>Login</DrawerTitle>
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
              </CsStack>
              <CsStack className="px-4 justify-start" gap="xs">
                <CsTextLink text="Forgot your password?" href="#" />
                <CsTextLink text="Don’t have an account?" href="#" />
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

export { CsDrawerLogin };
