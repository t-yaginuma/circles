import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  text: string;
  type: "submit" | "button";
  isDisabled?: boolean;
  isLoading?: boolean;
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: "outline" | "secondary" | "destructive" | "ghost" | "link";
};

const CsButton = (props: Props) => {
  const {
    text,
    variant,
    onClick,
    className,
    isDisabled,
    isLoading,
    type = "button",
  } = props;

  return (
    <>
      <Button
        className={className}
        variant={variant}
        type={type}
        onClick={onClick}
        disabled={isDisabled || isLoading}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

        {text}
      </Button>
    </>
  );
};

export { CsButton };
