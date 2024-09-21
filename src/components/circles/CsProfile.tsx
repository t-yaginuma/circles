import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CsRow } from "@/components/layouts/CsRow";
import Link from "next/link";
import { CsText } from "@/components/circles/CsText";
import { CsCountryFlag } from "@/components/circles/CsCountryFlag";

type Props = {
  name: string;
  countryCode?: string;
  text?: string;
  subtext?: string;
  image?: string;
  href?: string;
  onClick?: () => void;
};

const CsProfile = (props: Props) => {
  const { name, image, countryCode, subtext, href = "#", onClick } = props;

  return (
    <>
      <Link href={href} onClick={onClick}>
        <CsRow gap="sm" isNoWrap isItemStart>
          <div className="flex items-center gap-2">
            <Avatar className="hidden h-12 w-12 sm:flex rounded-full overflow-hidden">
              <AvatarImage src={image} alt="@shadcn" />
              <AvatarFallback>no Image</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div>
              <span className="text-sm font-semibold">{name}</span>
              {countryCode && (
                <CsCountryFlag className="ml-1" countryCode={countryCode} />
              )}
            </div>
            <div className="break-words">
              {subtext && (
                <CsText type="secondary" size="sm">
                  {subtext}
                </CsText>
              )}
            </div>
          </div>
        </CsRow>
      </Link>
    </>
  );
};

export { CsProfile };
