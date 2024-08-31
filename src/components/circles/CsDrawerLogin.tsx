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

type Props = {};

const CsDrawerLogin = (props: Props) => {
  const {} = props;

  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
        Login
      </DrawerTrigger>
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
