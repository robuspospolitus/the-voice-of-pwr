import { getLecturers } from "@/lib/api/lecturers";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default async function Lecturers() {
  const lecturers = await getLecturers();
  const byFaculty = Object.groupBy(
    lecturers,
    (lecturer) => lecturer.faculties?.[0]?.faculty.fullName ?? "brak",
  );
  return (
    <main className="bg-[#fcf9ff] flex flex-col pt-20 h-screen">
      <section className="w-full">
        <div className="max-w-5xl m-auto space-y-8">
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Wyszukaj wykładowcę
              </h1>

              <p className="text-base text-zinc-600 leading-relaxed">
                Tutaj znajdziesz i zobaczysz opinię ta temat danewo wykładowcy
              </p>
            </div>

            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#263A99]/60" />

              <Input
                placeholder="Szukaj wątków lub przedmiotów..."
                className="pl-9 bg-white border-[#263A99]/10 shadow-sm focus-visible:ring-[#97B4DE] h-10 rounded-md text-sm"
              />
            </div>
          </section>
          <div>
            {Object.entries(byFaculty).map(([fullName, lecturers]) => (
              <Card className="bg-white shadow-sm" key={fullName}>
                <CardHeader className="border-b border-[#263A99]/10">
                  <CardTitle className="text-lg text-zinc-900">
                    {fullName}
                  </CardTitle>

                  <p className="mt-1 text-xs text-zinc-500">
                    Liczba wykladowcow: {lecturers?.length}
                  </p>
                </CardHeader>

                <div className=" px-4">
                  {lecturers?.map((lecturer) => (
                    <Link
                      key={lecturer.id}
                      href={`/lecturers/${lecturer.id}`}
                      className="group flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-[#97B4DE]/10"
                    >
                      <div>
                        <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-[#263A99]">
                          {lecturer.name} {lecturer.surname}
                        </h3>
                        {lecturer.classes && lecturer.classes.length > 0 && (
                          <p className="mt-1 text-sm text-zinc-500">
                            {lecturer.classes
                              .map((item) => item.course.fullName)
                              .join(", ")}
                          </p>
                        )}
                      </div>

                      <ChevronRight className="h-5 w-5 shrink-0 text-[#97B4DE] transition-colors group-hover:text-[#263A99]" />
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
