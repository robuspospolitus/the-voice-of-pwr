import type { ReactNode } from "react";
import NavBar from "@/components/navbar/navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
