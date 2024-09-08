import { cn } from "@/libs/shadcn/utils";

type Props = {
  heading: string;
  description?: string;
  level?: "h1" | "h2";
};

const CsHeading = (props: Props) => {
  const { level = "h1", heading, description } = props;
  const classNamesCommon = "font-semibold leading-none tracking-tight";
  const h1 = <h1 className={cn("text-2xl", classNamesCommon)}>{heading}</h1>;
  const h2 = <h2 className={cn("text-xl ", classNamesCommon)}>{heading}</h2>;

  const headingElements = { h1, h2 };

  return (
    <div>
      {headingElements[level]}
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export { CsHeading };
