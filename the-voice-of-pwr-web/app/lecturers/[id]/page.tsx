import BackLink from "@/components/layout/BackLink";
import { lecturersMock } from "@/data/lecturers";
import { notFound } from "next/navigation";

export default async function LecturerView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lecturer = lecturersMock.find((item) => item.id === String(id));
  if (!lecturer) notFound();
  return (
    <main>
      <BackLink title="Wróć do listy" href="/lecturers" />
      <h1>
        {lecturer.name} {lecturer.surname}
      </h1>
      <p>{lecturer.faculties?.[0]?.faculty.fullName}</p>
      <ul>
        {lecturer.opinions?.map((opinion) => (
          <div key={opinion.id} className="">
            <h1>{opinion.title}</h1>
            <p>
              {opinion.description}
              <br /> {opinion.user?.name}
            </p>
          </div>
        ))}
      </ul>
    </main>
  );
}
