import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";

import Footer from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourses, getFaculty, getStudyField } from "@/lib/api/courses";

export default async function StudyFieldPage({
  params,
}: {
  params: Promise<{ fieldId: string }>;
}) {
  const { fieldId } = await params;
  const field = await getStudyField(fieldId);
  if (!field) notFound();

  const [faculty, courses] = await Promise.all([
    getFaculty(field.facultyId),
    getCourses(),
  ]);

  const fieldCourses = courses.filter(
    (course) => course.studyFieldId === field.id,
  );

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-zinc-900">
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link
          href="/courses"
          className="mb-6 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-[#263A99]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Wszystkie kierunki
        </Link>

        <section className="mb-8 overflow-hidden rounded-2xl border border-[#263A99]/10 bg-white shadow-sm">
          <div className="bg-[#263A99] px-6 py-7 text-white sm:px-8">
            <h1 className="text-2xl font-bold sm:text-3xl">{field.name}</h1>
            {faculty && (
              <p className="mt-3 text-sm text-white/80">{faculty.name}</p>
            )}
          </div>
        </section>

        <Card className="border-[#263A99]/10 bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#263A99]" />
              <CardTitle className="text-lg">Przedmioty</CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-2 pt-0">
            {fieldCourses.length === 0 ? (
              <div className="p-8 text-center">
                <p className="font-semibold text-zinc-900">
                  Brak dodanych przedmiotów
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Lista zostanie uzupełniona na podstawie programu studiów.
                </p>
              </div>
            ) : (
              fieldCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${field.id}/${course.id}`}
                  className="group flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-[#97B4DE]/10"
                >
                  <div>
                    {course.semester && (
                      <div className="mb-2 flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                        >
                          Semestr {course.semester}
                        </Badge>
                      </div>
                    )}

                    <h3 className="font-semibold text-zinc-900 group-hover:text-[#263A99]">
                      {course.name}
                    </h3>
                  </div>

                  <ChevronRight className="h-5 w-5 shrink-0 text-[#97B4DE] group-hover:text-[#263A99]" />
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
