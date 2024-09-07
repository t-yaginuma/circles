import { cn } from "@/libs/utils";
import { Loader2 } from "lucide-react";

type Props = {
  className?: string;
};

const CsLoader = (props: Props) => {
  const { className } = props;

  return (
    <div className="w-full h-hull relative flex justify-center items-center">
      <Loader2
        className={cn("h-8 w-8 text-primary/60 animate-spin", className)}
      />
    </div>
  );
};

export { CsLoader };
