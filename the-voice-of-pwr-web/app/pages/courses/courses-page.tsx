"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FACULTIES } from "./data/faculties";
import { STUDY_FIELDS } from "./data/study-fields";
import { COURSES } from "./data/courses";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredFaculties = FACULTIES.map((faculty) => {
    const fields = STUDY_FIELDS.filter(
      (field) => field.facultyId === faculty.id,
    ).filter((field) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        field.name.toLowerCase().includes(normalizedQuery) ||
        faculty.name.toLowerCase().includes(normalizedQuery)
      );
    });

    return {
      ...faculty,
      fields,
    };
  }).filter((faculty) => faculty.fields.length > 0);

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-zinc-900 font-sans">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Kierunki i przedmioty
            </h1>

            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              Wybierz wydział i kierunek, sprawdź przedmioty oraz podziel się
              opinią o kursach.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#263A99]/60" />

            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj kierunku..."
              className="h-10 border-[#263A99]/10 bg-white pl-9 shadow-sm focus-visible:ring-[#97B4DE]"
            />
          </div>
        </section>

        <section className="space-y-8">
          {filteredFaculties.map((faculty) => (
            <Card
              key={faculty.id}
              className="border-[#263A99]/10 bg-white shadow-sm"
            >
              <CardHeader className="border-b border-[#263A99]/10">
                <div>
                  <CardTitle className="text-lg text-zinc-900">
                    {faculty.name}
                  </CardTitle>

                  <p className="mt-1 text-xs text-zinc-500">
                    {faculty.fields.length}{" "}
                    {faculty.fields.length === 1 ? "kierunek" : "kierunki"}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-2">
                {faculty.fields.map((field) => {
                  const courseCount = COURSES.filter(
                    (course) => course.studyFieldId === field.id,
                  ).length;

                  return (
                    <Link
                      key={field.id}
                      href={`/courses/${field.id}`}
                      className="group flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-[#97B4DE]/10"
                    >
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-[#263A99]">
                            {field.name}
                          </h3>

                          <Badge
                            variant="secondary"
                            className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                          >
                            {field.degree}
                          </Badge>

                          {field.languages.map((language) => (
                            <Badge
                              key={language}
                              variant="secondary"
                              className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                            >
                              {language.toUpperCase()}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-zinc-500">
                          {courseCount > 0
                            ? `${courseCount} dodanych przedmiotów`
                            : "Przedmioty będą uzupełniane"}
                        </p>
                      </div>

                      <ChevronRight className="h-5 w-5 shrink-0 text-[#97B4DE] transition-colors group-hover:text-[#263A99]" />
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          ))}

          {filteredFaculties.length === 0 && (
            <Card className="border-[#263A99]/10 bg-white shadow-sm">
              <CardContent className="p-10 text-center">
                <p className="font-semibold text-zinc-900">
                  Nie znaleziono kierunku
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Spróbuj wpisać inną nazwę.
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
