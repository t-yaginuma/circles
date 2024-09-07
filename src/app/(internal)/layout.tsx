import type { Metadata } from "next";
import { CsSidebar } from "@/components/circles/CsSidebar";
import { CsDrawerCircle } from "@/components/circles/CsDrawerCircle";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <CsSidebar />

      <div className="flex flex-col h-full">{children}</div>

      <CsDrawerCircle />
    </div>
  );
}
