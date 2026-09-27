import { LecturerDetails } from "@/lib/types/lecturer";
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import GradeBadge from "@/components/pages/opinion/GradeBadge";
import { averageGrade } from "@/lib/grades";

=======
import {
  gradeString,
  averageGrade,
  gradeColor,
  opinionLabel,
} from "@/components/LecturerPreview";
>>>>>>> 1a49c94cb9b5f8a3bad8f17180a6820422e27d2a
export default function LecturerHeader({
  lecturer,
}: {
  lecturer: LecturerDetails;
}) {
<<<<<<< HEAD
  const faculty = lecturer.faculties?.[0]?.faculty;
  const opinionsCount = lecturer.opinions?.length ?? 0;

  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-[#263A99]/10 bg-white p-6 shadow-sm">
      <div className="min-w-0 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {lecturer.name} {lecturer.surname}
        </h1>

        {faculty && (
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Badge
              variant="secondary"
              className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
            >
              {faculty.shortcut}
            </Badge>
            <span className="text-zinc-600">{faculty.fullName}</span>
          </div>
        )}

        {lecturer.classes && lecturer.classes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {lecturer.classes.map((item) => (
              <Badge
                key={item.course.id}
                variant="secondary"
                className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
              >
                {item.course.fullName}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <GradeBadge average={averageGrade(lecturer)} count={opinionsCount} />
=======
  const averageValue = averageGrade(lecturer) ?? 0;
  const opinionsCount = lecturer.opinions?.length ?? 0;
  return (
    <div className="rounded-xl bg-prim p-6 text-white sm:px-8 w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {lecturer.name} {lecturer.surname}
        </h1>
        <div className="space-y-1">
          <p
            className={`text-xl font-semibold tabular-nums tracking-tight  p-2 rounded-xl  ${averageValue === null ? "text-prim" : gradeColor(averageValue)}`}
          >
            {averageValue === null ? "-" : gradeString(averageValue)}
          </p>
          <p className="text-xs text-white">
            {lecturer.opinions?.length} {opinionLabel(opinionsCount)}
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base space-x-2">
          <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-prim">
            {lecturer.faculties?.[0]?.faculty.shortcut}
          </span>
          <span>{lecturer.faculties?.[0]?.faculty.fullName}</span>
        </p>
        {lecturer.classes?.map((item) => (
          <span
            className="shrink-0 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-prim"
            key={item.course.id}
          >
            {item.course.fullName}
          </span>
        ))}
      </div>
>>>>>>> 1a49c94cb9b5f8a3bad8f17180a6820422e27d2a
    </div>
  );
}
