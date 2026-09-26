import { gradeColor, gradeString, opinionLabel } from "@/lib/grades";

export default function GradeBadge({
  average,
  count,
}: {
  average: number | null;
  count?: number;
}) {
  const color =
    average === null
      ? "bg-[#97B4DE]/20 text-[#263A99]"
      : `${gradeColor(average)} text-white`;

  return (
    <div className="flex shrink-0 flex-col items-center gap-1">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-md text-sm font-semibold tabular-nums ${color}`}
      >
        {average === null ? "–" : gradeString(average)}
      </span>
      {count !== undefined && (
        <span className="text-xs font-medium text-zinc-500">
          {count} {opinionLabel(count)}
        </span>
      )}
    </div>
  );
}
