import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";

import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "cn";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GłosPWr",
  description: "Forum studentów Politechniki Wrocławskiej",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}