import type { ReactNode } from "react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fcf9ff] text-zinc-900">
      <NavBar />
      {children}
    </div>
  );
}
