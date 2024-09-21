import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "danger";
  size?: "md" | "sm" | "xs";
  isItalic?: boolean;
  className?: string;
};

const CsText = (props: Props) => {
  const {
    children,
    type = "primary",
    isItalic,
    size = "md",
    className,
  } = props;

  return (
    <>
      <p
        className={classNames(
          { "text-muted-foreground": type === "secondary" },
          { "text-md": size === "md" },
          { "text-sm": size === "sm" },
          { "text-xs": size === "xs" },
          { italic: isItalic },
          { className }
        )}
      >
        {children}
      </p>
    </>
  );
};

export { CsText };
