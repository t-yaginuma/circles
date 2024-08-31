import { Badge } from "@/components/ui/badge";

type Props = {
  text: string;
  variant?: "outline" | "secondary" | "destructive";
};

const CsBadge = (props: Props) => {
  const { text, variant } = props;

  return (
    <>
      <Badge variant={variant}>{text}</Badge>
    </>
  );
};

export { CsBadge };
