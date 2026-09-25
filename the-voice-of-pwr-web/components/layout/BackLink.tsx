import type { ComponentProps } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackLinkProps {
  href: string;
  title: string;
  onClick?: ComponentProps<typeof Link>["onClick"];
}

export default function BackLink({ href, title, onClick }: BackLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex items-center text-sm font-medium text-zinc-600 transition duration-200 group-hover:-translate-y-0.5"
    >
      <ArrowLeft size="16" className="mr-2" />
      {title}
    </Link>
  );
}
