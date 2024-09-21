import { CsLoader } from "@/components/circles/CsLoader";
import { CsRootLayout } from "@/components/layouts/CsRootLayout";
import useGetUser from "@/hooks/use-get-user";

export default async function Home() {
  const { loginUserId } = await useGetUser();
  return (
    <>
      <CsRootLayout loginUserId={loginUserId}>
        <div className="w-screen h-screen flex items-center justify-center">
          <CsLoader />
        </div>
      </CsRootLayout>
    </>
  );
}
