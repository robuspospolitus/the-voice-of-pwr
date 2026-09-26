import { lecturersMock } from "@/data/lecturers";
import { notFound } from "next/navigation";
import LecturerOpinionsSection from "@/components/LecturerOpinionsSection";

export default async function LecturerView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lecturer = lecturersMock.find((item) => item.id === id);
  if (!lecturer) notFound();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-4 p-4">
      <LecturerOpinionsSection lecturer={lecturer} />
    </main>
  );
}
