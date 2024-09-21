"use client";

import { CsStack } from "@/components/layouts/CsStack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CsRow } from "@/components/layouts/CsRow";
import { CsCountryFlag } from "@/components/circles/CsCountryFlag";

import Link from "next/link";
import { CsTextLink } from "@/components/circles/CsTextLink";
import { CsButton } from "@/components/circles/CsButton";
import { Button } from "@/components/ui/button";
import country from "country-list-js";
import { useModalStore } from "@/store/modal-handle";
import { CsButtonIcon } from "@/components/circles/CsButtonIcon";
import { Inbox, Mail } from "lucide-react";

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
  user?: {
    isMe?: boolean;
  };
  circle?: {
    authority: CircleAuthority;
  };
};

const CsHeadings = (props: Props) => {
  const { image, name, description, city, countryCode, links, user, circle } =
    props;
  const storeModal = useModalStore();

  const onCLick = () => {
    storeModal.setIsOpenProfileUpdateModal(true);
  };

  return (
    <CsRow gap="md" className="w-full flex-nowrap">
      <Avatar className="w-36 h-36">
        {image && <AvatarImage src={image} alt="@shadcn" />}
        <AvatarFallback>no Image</AvatarFallback>
      </Avatar>

      <CsStack gap="sm">
        <CsRow gap="lg" isItemCenter>
          <h1 className="text-2xl font-semibold leading-none tracking-tight">
            {name ? name : "no name"}
          </h1>
          <CsRow gap="md" isItemCenter>
            {user &&
              (user.isMe ? (
                <CsButton
                  className="hidden lg:block"
                  type="button"
                  text="Edit Your Profile"
                  variant="link"
                  onClick={onCLick}
                />
              ) : (
                <Link href="/messages" className="ml-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-auto h-8 w-8"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                  </Button>
                </Link>
              ))}
            {circle && (
              <>
                {(() => {
                  switch (circle.authority) {
                    case 2:
                      return (
                        <>
                          <CsButtonIcon
                            href="/messages"
                            icon={<Inbox className="h-4 w-4" />}
                          />
                          <CsButton
                            type="button"
                            text="Add Music"
                            onClick={onCLick}
                          />
                          <CsButton
                            type="button"
                            text="Edit Your Profile"
                            variant="link"
                            onClick={onCLick}
                          />
                        </>
                      );
                    case 1:
                      return (
                        <>
                          <Link href="/messages">
                            <Button
                              variant="outline"
                              size="icon"
                              className="ml-auto h-8 w-8"
                            >
                              <Mail className="h-4 w-4" />
                              <span className="sr-only">
                                Toggle notifications
                              </span>
                            </Button>
                          </Link>
                          <CsButton
                            type="button"
                            text="Add Music"
                            onClick={onCLick}
                          />
                        </>
                      );
                    default:
                      return (
                        <>
                          <CsButton
                            type="button"
                            text="Join This Circle"
                            onClick={onCLick}
                          />
                        </>
                      );
                  }
                })()}
              </>
            )}
          </CsRow>
        </CsRow>

        {countryCode && (
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground italic">
              {city} {country.findByIso2(countryCode).name}{" "}
              {<CsCountryFlag countryCode={countryCode} />}
            </span>
          </div>
        )}

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}

        {links && (
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
        )}
      </CsStack>
    </CsRow>
  );
};

export { CsHeadings };
