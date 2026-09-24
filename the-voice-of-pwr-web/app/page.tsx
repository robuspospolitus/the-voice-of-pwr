"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex items-center gap-4">
        <Link
          href="/lecturers"
          className="inline-flex items-center text-sm font-medium text-zinc-600"
        >
          Wykładowcy
        </Link>
      </div>
    </main>
  );
}
