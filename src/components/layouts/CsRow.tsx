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
          "flex",
          { "gap-x-1": gap === "xs" },
          { "gap-x-2": gap === "sm" },
          { "gap-x-4": gap === "md" },
          { "gap-x-6": gap === "lg" }
        )}
      >
        {children}
      </div>
    </>
  );
};

export { CsRow };
