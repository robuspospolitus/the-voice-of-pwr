import LecturerCard from "@/components/lecturer-card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl">
      <Link href={"/lecturers"}>Tutaj sprawdszam</Link>
    </main>
  );
}
