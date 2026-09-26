import { LecturerDetails } from "@/lib/types/lecturer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "../../ui/badge";
import GradeBadge from "../opinion/GradeBadge";
import { averageGrade } from "@/lib/grades";

export default function LecturerPreview({
  lecturer,
}: {
  lecturer: LecturerDetails;
}) {
  const opinionsCount = lecturer.opinions?.length ?? 0;
  const faculty = lecturer.faculties?.[0]?.faculty;

  return (
    <Link href={`/lecturers/${lecturer.id}`} className="block group">
      <div className="flex items-center gap-4 rounded-lg border border-[#263A99]/10 bg-white p-4 shadow-sm transition-all hover:border-[#97B4DE]">
        <GradeBadge average={averageGrade(lecturer)} count={opinionsCount} />

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-tight text-zinc-900 transition-colors group-hover:text-[#263A99]">
            {lecturer.name} {lecturer.surname}
          </h3>

          {faculty && (
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
              <Badge
                variant="secondary"
                className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
              >
                {faculty.shortcut}
              </Badge>
              <span className="truncate text-zinc-500">{faculty.fullName}</span>
            </div>
          )}

          {lecturer.classes && lecturer.classes.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
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

        <ChevronRight className="size-4 shrink-0 text-[#97B4DE] transition-colors group-hover:text-[#263A99]" />
      </div>
    </Link>
  );
}
