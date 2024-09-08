import { cn } from "@/libs/shadcn/utils";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  className?: string;
  isTargetBlank?: boolean;
  onClick?: () => void;
};

const CsTextLink = (props: Props) => {
  const { text, href = "#", onClick, className, isTargetBlank } = props;

  const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <>
      <Link
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline",
          className
        )}
        href={href}
        target={isTargetBlank ? "_blank" : undefined}
        onClick={onClick ? clickHandle : undefined}
      >
        {text}
      </Link>
    </>
  );
};

export { CsTextLink };
