"use client";

import Link from "next/link";
import { Inbox, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CsAccountMenu } from "@/components/circles/CsAccountMenu";
import { CsButton } from "@/components/circles/CsButton";
import { CsButtonIcon } from "@/components/circles/CsButtonIcon";
import { useModalStore } from "@/store/modal-handle";
import { CsSidebar } from "@/components/circles/CsSidebar";

type Props = {
  loginUserId?: string;
};
const CsHeader = (props: Props) => {
  const { loginUserId } = props;
  const storeModal = useModalStore();

  return (
    <>
      <header className="sticky top-0 w-screen backdrop-blur flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 z-10">
        {/* <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button> */}
        {/* <CsSidebar loginUserId={loginUserId} /> */}

        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/">
            <span className="text-3xl font-federal text-orange">Circles</span>
          </Link>
        </div>
        <div className="w-full flex-1">
          {/* TODO: implement search function */}
          {/* <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form> */}
        </div>

        {(() => {
          if (loginUserId) {
            return (
              <>
                <CsButtonIcon
                  href="/messages"
                  icon={<Inbox className="h-4 w-4" />}
                />
                <CsAccountMenu loginUserId={loginUserId} />
              </>
            );
          } else {
            return (
              <>
                <CsButton
                  type="button"
                  variant="link"
                  text="Sign up"
                  onClick={() => {
                    storeModal.setIsOpenSignUpModal(true);
                  }}
                />
                <CsButton
                  type="button"
                  variant="link"
                  text="Login"
                  onClick={() => {
                    storeModal.setIsOpenLoginModal(true);
                  }}
                />
              </>
            );
          }
        })()}
      </header>
    </>
  );
};

export { CsHeader };
