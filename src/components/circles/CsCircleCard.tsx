import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CsBadge } from "./CsBadge";
import { CsRow } from "@/components/layouts/CsRow";

type Props = {
  name: string;
  href: string;
  image: string | null;
  description: string | null;
};

const CsCircleCard = (props: Props) => {
  const { name, image, href, description } = props;

  return (
    <>
      <Link href={href} className="block w-60">
        <Card className="overflow-hidden">
          <div className="w-full h-48 overflow-hidden flex items-center justify-center shadow">
            {image && (
              <Image
                src={image}
                width={240}
                height={240}
                alt="Picture of the author"
              />
            )}
          </div>

          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="h-16 line-clamp-3">
              {description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <CsRow gap="xs">
              <CsBadge text="Beats" variant="outline" />
              <CsBadge text="Hiphop" variant="outline" />
              <CsBadge text="Japan" variant="outline" />
            </CsRow>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export { CsCircleCard };
