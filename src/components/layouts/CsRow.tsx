import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  gap?: "xs" | "sm" | "md" | "lg";
  isSpaceBetween?: boolean;
  isItemStart?: boolean;
  isItemCenter?: boolean;
  isNoWrap?: boolean;
};

const CsRow = (props: Props) => {
  const {
    children,
    gap,
    className,
    isSpaceBetween,
    isItemStart,
    isItemCenter,
    isNoWrap,
  } = props;

  return (
    <>
      <div
        className={classNames(
          "flex flex-wrap",
          { "gap-1": gap === "xs" },
          { "gap-2": gap === "sm" },
          { "gap-4": gap === "md" },
          { "gap-6": gap === "lg" },
          { "justify-between": isSpaceBetween },
          { "items-start": isItemStart },
          { "items-center": isItemCenter },
          { "flex-nowrap": isNoWrap },
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export { CsRow };
