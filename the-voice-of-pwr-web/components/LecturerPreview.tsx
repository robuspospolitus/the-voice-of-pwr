import { LecturerDetails } from "@/lib/types/lecturer";
import Link from "next/link";
import { Card, CardTitle } from "./ui/card";
import { MoveUpRightIcon } from "lucide-react";
import { lecturersMock } from "@/data/lecturers";

function opinionLabel(count: number) {
  if (count === 1) return "opinia";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "opinie";
  }
  return "opinii";
}

function averageGrade(lecturer: LecturerDetails) {
  const grades = lecturer.opinions?.map((opinion) => opinion.grade) ?? [];
  if (grades.length === 0) return null;
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}
function averageGradeString(average: number) {
  return average.toFixed(1).replace(".", ",");
}
function gradeColor(avrage: number) {
  if (avrage < 3) return "bg-red-600";
  if (avrage < 4.5) return "bg-yellow-600";
  return "bg-green-600";
}
export default function LecturerPreview({
  lecturer,
}: {
  lecturer: LecturerDetails;
}) {
  const opinionsCount = lecturer.opinions?.length ?? 0;
  const faculty = lecturer.faculties?.[0]?.faculty;

  const averageValue = averageGrade(lecturer) ?? 0;
  const averageString = averageGradeString(averageValue) ?? "";
  return (
    <Link
      href={`/lecturers/${lecturer.id}`}
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-prim"
    >
      <Card className="border-l-4 border-l-prim transition duration-200 group-hover:-translate-y-0.5 group-hover:ring-prim/30">
        <div className="flex items-center gap-4 px-(--card-spacing)">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="">
                {lecturer.name} {lecturer.surname}
              </CardTitle>
              <MoveUpRightIcon
                aria-hidden
                className="size-4 shrink-0 text-muted-foreground transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-prim"
              />
            </div>
            {faculty && (
              <p className="mt-1 flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                <span className="shrink-0 rounded-full bg-prim/10 px-2 py-0.5 text-xs font-medium text-prim">
                  {faculty.shortcut}
                </span>
                <span className="truncate">{faculty.fullName}</span>
              </p>
            )}
          </div>
          <div className="text-right flex  flex-col justify-center items-center text-white space-y-2">
            <p
              className={`text-xl font-semibold tabular-nums tracking-tight  p-1.5 rounded-xl  ${averageValue === null ? "text-prim" : gradeColor(averageValue)}`}
            >
              {averageValue === null ? "-" : averageGradeString(averageValue)}
            </p>
            <p className="text-xs text-muted-foreground">
              {lecturer.opinions?.length} {opinionLabel(opinionsCount)}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
