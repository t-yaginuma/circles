import { CsHeader } from "@/components/circles/CsHeader";
import { CsFooter } from "@/components/circles/CsFooter";

type Props = {
  children: React.ReactNode;
  loginUserId?: string;
};

const CsRootLayout = (props: Props) => {
  const { children, loginUserId } = props;

  return (
    <>
      <CsHeader loginUserId={loginUserId} />
      {children}
      <CsFooter />
    </>
  );
};

export { CsRootLayout };
