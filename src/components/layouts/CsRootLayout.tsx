import { CsHeader } from "@/components/circles/CsHeader";
import { CsFooter } from "@/components/circles/CsFooter";

type Props = {
  children: React.ReactNode;
  isAuthenticated: boolean;
};

const CsRootLayout = (props: Props) => {
  const { children, isAuthenticated } = props;

  return (
    <>
      <CsHeader isAuthenticated={isAuthenticated} />
      {children}
      <CsFooter />
    </>
  );
};

export { CsRootLayout };
