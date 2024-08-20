import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
};

const CsStack = (props: Props) => {
  const { children, gap } = props;

  return (
    <>
      <div
        className={classNames(
          "flex flex-col",
          { "gap-y-2": gap === "sm" },
          { "gap-y-4": gap === "md" },
          { "gap-y-6": gap === "lg" }
        )}
      >
        {children}
      </div>
    </>
  );
};

export { CsStack };
