import { Button } from "@/components/ui/button";

type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
  variant?: "outline" | "secondary" | "destructive" | "ghost" | "link";
};

const CsButton = (props: Props) => {
  const { text, variant, onClick, className } = props;

  return (
    <>
      <Button className={className} variant={variant} onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

export { CsButton };
