import { CsHeading } from "@/components/circles/CsHeading";
import { CsDrawerProfileUpdate } from "@/components/circles/CsDrawerProfileUpdate";
import { CsStack } from "@/components/layouts/CsStack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CsRow } from "@/components/layouts/CsRow";
import { CsCountryFlag } from "@/components/circles/CsCountryFlag";

import Link from "next/link";
import { CsTextLink } from "@/components/circles/CsTextLink";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import country from "country-list-js";

type Link = {
  label: string;
  url: string;
};

type Props = {
  image?: string | null;
  name?: string | null;
  description?: string | null;
  city?: string | null;
  countryCode?: string | null;
  links?: Link[];
  isMe?: boolean;
};

const CsProfile = (props: Props) => {
  const { image, name, description, city, countryCode, links, isMe } = props;

  return (
    <CsRow gap="md" className="w-full flex-nowrap">
      <Avatar className="w-36 h-36">
        {image && <AvatarImage src={image} alt="@shadcn" />}
        <AvatarFallback>no Image</AvatarFallback>
      </Avatar>

      <CsStack gap="sm">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-semibold leading-none tracking-tight">
            {name ? name : "no name"}
          </h1>
          {!isMe && (
            <Link href="/messages">
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </Link>
          )}

          <CsDrawerProfileUpdate />
        </div>

        <div className="flex items-center">
          <span className="text-sm text-muted-foreground italic">
            {city} {countryCode && country.findByIso2(countryCode).name}{" "}
            {countryCode && <CsCountryFlag countryCode={countryCode} />}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>

        <ul className="flex gap-2">
          {links &&
            links.map((link, index) => {
              return (
                <li key={index}>
                  <CsTextLink href={link.url} text={link.label} />{" "}
                  <span className="text-sm text-muted-foreground">/</span>
                </li>
              );
            })}
        </ul>
      </CsStack>
    </CsRow>
  );
};

export { CsProfile };
