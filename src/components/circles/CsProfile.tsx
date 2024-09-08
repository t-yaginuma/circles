import { CsHeading } from "@/components/circles/CsHeading";
import { CsDrawerUserEdit } from "@/components/circles/CsDrawerUserEdit";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import { CsStack } from "@/components/layouts/CsStack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CsRow } from "@/components/layouts/CsRow";
import { US } from "country-flag-icons/react/3x2";
import Link from "next/link";
import { CsTextLink } from "@/components/circles/CsTextLink";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const CsProfile = (props: Props) => {
  const {} = props;

  return (
    <CsRow gap="md" className="w-full flex-nowrap">
      <Avatar className="w-36 h-36">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <CsStack gap="sm">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-semibold leading-none tracking-tight">
            GorGor
          </h1>
          <Link href="/messages">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </Link>
        </div>

        <div className="flex items-center">
          <span className="text-sm text-muted-foreground italic">
            Chicago USA
          </span>

          <US title="United States" className="ml-2 inline-block w-4 h-4" />
        </div>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>

        <ul className="flex gap-2">
          <li>
            <CsTextLink href="https://google.com" text="home page" />{" "}
            <span className="text-sm text-muted-foreground">/</span>
          </li>
          <li>
            <CsTextLink href="https://google.com" text="Band Camp" />{" "}
            <span className="text-sm text-muted-foreground">/</span>
          </li>
          <li>
            <CsTextLink href="https://google.com" text="instagram" />
          </li>
        </ul>
      </CsStack>
    </CsRow>
  );
};

export { CsProfile };
