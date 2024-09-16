import { CsRootLayout } from "@/components/layouts/CsRootLayout";
import useGetUser from "@/hooks/use-get-user";

export default async function ErrorPage() {
  const { loginUserId } = await useGetUser();
  return (
    <CsRootLayout loginUserId={loginUserId}>
      <p>Sorry, something went wrong</p>
    </CsRootLayout>
  );
}
