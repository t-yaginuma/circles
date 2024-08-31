import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
};

const CsRow = (props: Props) => {
  const { children, gap } = props;

  return (
    <>
      <div
        className={classNames(
          "flex flex-wrap",
          { "gap-1": gap === "xs" },
          { "gap-2": gap === "sm" },
          { "gap-4": gap === "md" },
          { "gap-6": gap === "lg" }
        )}
      >
        {children}
      </div>
    </>
  );
};

export { CsRow };
