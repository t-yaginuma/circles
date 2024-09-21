import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const CsButtonIcon = (props: Props) => {
  const { href = "#", icon, onClick } = props;

  return (
    <>
      <Link href={href} onClick={onClick}>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          {icon}
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </Link>
    </>
  );
};

export { CsButtonIcon };
