import { LecturerDetails } from "@/lib/types/lecturer";
import {
  gradeString,
  averageGrade,
  gradeColor,
  opinionLabel,
} from "@/components/LecturerPreview";
export default function LecturerHeader({
  lecturer,
}: {
  lecturer: LecturerDetails;
}) {
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
    </div>
  );
}
