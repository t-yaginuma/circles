import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
};

const CsTextLink = (props: Props) => {
  const { text, href = "#", onClick } = props;

  const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <>
      <Link
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline"
        href={href}
        onClick={onClick ? clickHandle : undefined}
      >
        {text}
      </Link>
    </>
  );
};

export { CsTextLink };
