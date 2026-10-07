"use client";

import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export default function LogoutButton() {
  const router = useRouter();

  function logout() {
    document.cookie = "accessToken=; Path=/; Max-Age=0";
    localStorage.removeItem("accessToken");
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={logout}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "hidden sm:inline-flex text-sm font-medium text-zinc-700 hover:text-[#263A99] hover:bg-[#97B4DE]/20",
      )}
    >
      Wyloguj się
    </button>
  );
}
