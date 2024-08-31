import { Button } from "@/components/ui/button";

type Props = {
  text: string;
  onClick?: () => void;
  variant?: "outline" | "secondary" | "destructive" | "ghost" | "link";
};

const CsButton = (props: Props) => {
  const { text, variant, onClick } = props;

  return (
    <>
      <Button variant={variant} onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

export { CsButton };
