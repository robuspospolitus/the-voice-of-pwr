import LecturerPreview from "@/components/pages/lecturer/LecturerPreview";
import { lecturersMock } from "@/data/lecturers";

export default function Lecturers() {
  const byFaculty = Object.groupBy(
    lecturersMock,
    (lecturer) => lecturer.faculties?.[0].faculty.fullName ?? "brak",
  );

  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 space-y-10">
      <section className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Wykładowcy
        </h1>
        <p className="text-base leading-relaxed text-zinc-600">
          Przeglądaj wykładowców i ich opinie.
        </p>
      </section>

      <div className="space-y-8">
        {Object.entries(byFaculty).map(([fullName, lecturers]) => (
          <section className="space-y-4" key={fullName}>
            <div className="flex items-center justify-between border-b border-[#263A99]/10 pb-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                {fullName}
              </h2>
              <span className="text-xs font-medium text-zinc-500">
                {lecturers?.length}
              </span>
            </div>

            <div className="space-y-4">
              {lecturers?.map((lecturer) => (
                <LecturerPreview key={lecturer.id} lecturer={lecturer} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
