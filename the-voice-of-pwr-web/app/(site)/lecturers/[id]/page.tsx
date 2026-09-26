import { lecturersMock } from "@/data/lecturers";
import { notFound } from "next/navigation";
import LecturerOpinionsSection from "@/components/pages/lecturer/LecturerOpinionsSection";

export default async function LecturerView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lecturer = lecturersMock.find((item) => item.id === id);
  if (!lecturer) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 space-y-8">
      <LecturerOpinionsSection lecturer={lecturer} />
    </main>
  );
}
