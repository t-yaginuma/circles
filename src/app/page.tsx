import { getUser } from "@/actions/auth";

export default function Home() {
  getUser();
  return (
    <>
      <main>
        <h1>This is Circles!</h1>
      </main>
    </>
  );
}
