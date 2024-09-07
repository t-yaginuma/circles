import { CsRootLayout } from "@/components/layouts/CsRootLayout";
import useGetUser from "@/hooks/use-get-user";

export default async function ErrorPage() {
  const { isAuthenticated } = await useGetUser();
  return (
    <CsRootLayout isAuthenticated={isAuthenticated}>
      <p>Sorry, something went wrong</p>
    </CsRootLayout>
  );
}
