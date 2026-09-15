import LecturerCard from "@/components/LecturerCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl">
      <Link href={"/lecturers"}>Tutaj sprawdszam</Link>
    </main>
  );
}
