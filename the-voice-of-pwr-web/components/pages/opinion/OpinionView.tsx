import { LecturerOpinion } from "@/lib/types/lecturer";
import GradeBadge from "./GradeBadge";

export default function OpinionView({ opinion }: { opinion: LecturerOpinion }) {
  const author = opinion.user?.name?.trim() || "Anonim";

  return (
    <article className="flex gap-4 rounded-lg border border-[#263A99]/10 bg-white p-4 shadow-sm transition-all hover:border-[#97B4DE]">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-zinc-900">{author}</span>
          <span className="text-[#97B4DE]">•</span>
          <span className="text-zinc-500">
            {new Date(opinion.date).toLocaleDateString("pl-PL")}
          </span>
        </div>

        <h3 className="mt-3 text-base font-semibold leading-tight text-zinc-900">
          {opinion.title}
        </h3>

        {opinion.description && (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {opinion.description}
          </p>
        )}
      </div>

      <GradeBadge average={opinion.grade} />
    </article>
  );
}
