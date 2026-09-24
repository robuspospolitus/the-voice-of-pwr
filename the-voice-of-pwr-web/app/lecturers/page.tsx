import FormsHeader from "@/components/layout/FormsHeader";
import BackLink from "@/components/layout/BackLink";
import LecturerPreview from "@/components/LecturerPreview";
import { lecturersMock } from "@/data/lecturers";

export default function Lecturers() {
  const byFaculty = Object.groupBy(
    lecturersMock,
    (lecturer) => lecturer.faculties?.[0].faculty.fullName ?? "brak",
  );

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-4 p-4">
      <BackLink title="Wróć do Strony głównej" href="/" />
      <FormsHeader
        title="Wykładowcy"
        description="Przeglądaj wykładowców i ich opinie"
      />
      {Object.entries(byFaculty).map(([fullName, lecturers]) => (
        <section className="flex flex-col gap-3" key={fullName}>
          <h2 className="text-zinc-500 text-sm">{fullName}</h2>
          {lecturers?.map((lecturer) => (
            <LecturerPreview key={lecturer.id} lecturer={lecturer} />
          ))}
        </section>
      ))}
    </main>
  );
}
