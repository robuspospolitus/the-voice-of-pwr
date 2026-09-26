import { LecturerDetails } from "@/lib/types/lecturer";
import { Badge } from "@/components/ui/badge";
import GradeBadge from "@/components/pages/opinion/GradeBadge";
import { averageGrade } from "@/lib/grades";

export default function LecturerHeader({
  lecturer,
}: {
  lecturer: LecturerDetails;
}) {
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
    </div>
  );
}
