"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { CircleUser } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOut, getUser } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/auth";

type Props = {};

const CsProfile = (props: Props) => {
  const {} = props;
  const router = useRouter();
  const { toast } = useToast();
  const store = useAuthStore();

  const logoutHandle = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const user = getUser();
    user.then((u) => {
      console.log(u);
    });

    await signOut();

    const user2 = getUser();
    user2.then((u) => {
      console.log(u);
    });
    store.setIsAuthenticated(false);

    toast({
      title: "You logged-out successfully!",
      // description: "Friday, February 10, 2023 at 5:57 PM",
    });
    const href = "/logout";
    router.push(href);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Your Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" onClick={logoutHandle}>
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export { CsProfile };
