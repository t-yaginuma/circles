import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

const CsStack = (props: Props) => {
  const { children, gap, className } = props;

  return (
    <>
      <div
        className={classNames(
          "flex flex-col",
          { "gap-y-1": gap === "xs" },
          { "gap-y-2": gap === "sm" },
          { "gap-y-4": gap === "md" },
          { "gap-y-6": gap === "lg" },
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export { CsStack };
