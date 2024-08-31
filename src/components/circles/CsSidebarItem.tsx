import Link from "next/link";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import classNames from "classnames";

type Props = {
  href: string;
  text: string;
  icon?: React.ReactNode;
  isCurrent?: boolean;
  badge?: number;
};

const CsSidebarItem = (props: Props) => {
  const { href, text, icon, isCurrent, badge } = props;

  return (
    <>
      <Link
        href={href}
        className={classNames(
          "flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:text-primary",
          isCurrent ? "bg-muted text-primary" : "text-muted-foreground"
        )}
      >
        {icon && icon}
        {text}
        {badge && (
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {badge}
          </Badge>
        )}
      </Link>
    </>
  );
};

export { CsSidebarItem };
