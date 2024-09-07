import { CsSidebar } from "@/components/circles/CsSidebar";
import { CsRootLayout } from "@/components/layouts/CsRootLayout";

type Props = {
  children: React.ReactNode;
  isAuthenticated: boolean;
  currentPage: CurrentPage;
};

const CsRootLayoutInternal = (props: Props) => {
  const { children, isAuthenticated, currentPage } = props;

  return (
    <>
      <CsRootLayout isAuthenticated={isAuthenticated}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <CsSidebar
            isAuthenticated={isAuthenticated}
            currentPage={currentPage}
          />
          <div className="flex flex-col h-full">{children}</div>
        </div>
      </CsRootLayout>
    </>
  );
};

export { CsRootLayoutInternal };
