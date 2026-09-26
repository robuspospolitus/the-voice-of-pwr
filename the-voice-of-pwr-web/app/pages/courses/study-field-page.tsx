"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  FileText,
  GraduationCap,
} from "lucide-react";

import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FACULTIES } from "./data/faculties";
import { STUDY_FIELDS } from "./data/study-fields";
import { COURSES } from "./data/courses";

export default function StudyFieldPage() {
  const params = useParams();
  const fieldId = params?.fieldId as string;

  const field = STUDY_FIELDS.find((item) => item.id === fieldId);

  if (!field) {
    return (
      <div className="min-h-screen bg-[#fcf9ff]">
        <NavBar />

        <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <Card className="border-[#263A99]/10 bg-white p-8 text-center">
            <h1 className="text-xl font-bold">Nie znaleziono kierunku</h1>

            <Link
              href="/courses"
              className="mt-5 inline-flex text-sm font-medium text-[#263A99]"
            >
              Wróć do kierunków
            </Link>
          </Card>
        </main>

        <Footer />
      </div>
    );
  }

  const faculty = FACULTIES.find((item) => item.id === field.facultyId);

  const courses = COURSES.filter((course) => course.studyFieldId === field.id);

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-zinc-900">
      <NavBar />

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
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="border-none bg-white/15 font-medium text-white"
              >
                {field.degree}
              </Badge>

              {field.semesters && (
                <Badge
                  variant="secondary"
                  className="border-none bg-white/15 font-medium text-white"
                >
                  {field.semesters} semestrów
                </Badge>
              )}
            </div>

            <h1 className="text-2xl font-bold sm:text-3xl">{field.name}</h1>

            <p className="mt-3 text-sm text-white/80">{faculty?.name}</p>
          </div>
        </section>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Card className="border-[#263A99]/10 bg-white shadow-sm">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6E5F0] text-[#263A99]">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs text-zinc-500">Forma studiów</p>

                <p className="font-semibold text-zinc-900">{field.form}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#263A99]/10 bg-white shadow-sm">
            <CardContent className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6E5F0] text-[#263A99]">
                  <FileText className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Program studiów</p>

                  <p className="font-semibold text-zinc-900">
                    {field.programFile ? "Dostępny" : "Plik zostanie dodany"}
                  </p>
                </div>
              </div>

              {field.programFile ? (
                <Link
                  href={field.programFile}
                  className="text-sm font-medium text-[#263A99]"
                >
                  Otwórz
                </Link>
              ) : (
                <Button variant="outline" size="sm" disabled>
                  Otwórz
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="border-[#263A99]/10 bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#263A99]" />

              <CardTitle className="text-lg">Przedmioty</CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-2 pt-0">
            {courses.length === 0 ? (
              <div className="p-8 text-center">
                <p className="font-semibold text-zinc-900">
                  Brak dodanych przedmiotów
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Lista zostanie uzupełniona na podstawie programu studiów.
                </p>
              </div>
            ) : (
              courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${field.id}/${course.id}`}
                  className="group flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-[#97B4DE]/10"
                >
                  <div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {course.semester && (
                        <Badge
                          variant="secondary"
                          className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                        >
                          Semestr {course.semester}
                        </Badge>
                      )}
                    </div>

                    <h3 className="font-semibold text-zinc-900 group-hover:text-[#263A99]">
                      {course.name}
                    </h3>

                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-zinc-500">
                      {course.code && <span>{course.code}</span>}

                      {course.ects && <span>{course.ects} ECTS</span>}
                    </div>
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
