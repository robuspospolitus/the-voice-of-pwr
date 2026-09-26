"use client";
import { useState } from "react";
import type { LecturerDetails, LecturerOpinion } from "@/lib/types/lecturer";
import BackLink from "@/components/layout/BackLink";
import LecturerHeader from "@/components/layout/LecturerHeader";
import OpinionView from "@/components/pages/opinion/OpinionView";
import OpinionForm from "@/components/pages/opinion/OpinionForm";
import { BookPlus, Scroll } from "lucide-react";
import { opinionLabel } from "@/lib/grades";

export default function LecturerOpinionsSection({
  lecturer,
}: {
  lecturer: LecturerDetails;
}) {
  const [isAddOpinionForm, setAddOpinionForm] = useState(false);
  const [opinions, setOpinions] = useState<LecturerOpinion[]>(
    lecturer.opinions ?? [],
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <BackLink title="Wróć do listy" href="/lecturers" />
        <button
          className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md bg-prim px-4 text-sm font-medium text-white transition hover:bg-prim/90 hover:-translate-y-0.5"
          onClick={() => setAddOpinionForm(!isAddOpinionForm)}
        >
          {isAddOpinionForm ? <Scroll size="16" /> : <BookPlus size="16" />}
          {isAddOpinionForm ? "Zobacz opinie" : "Dodaj opinię"}
        </button>
      </div>

      {isAddOpinionForm ? (
        <OpinionForm
          lecturerId={lecturer.id}
          onAdd={(opinion) => setOpinions((prev) => [opinion, ...prev])}
          onSuccess={() => setAddOpinionForm(false)}
        />
      ) : (
        <>
          <LecturerHeader lecturer={{ ...lecturer, opinions }} />

          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#263A99]/10 pb-4">
              <h2 className="text-lg font-semibold text-zinc-900">Opinie</h2>
              <span className="text-xs font-medium text-zinc-500">
                {opinions.length} {opinionLabel(opinions.length)}
              </span>
            </div>

            {opinions.length === 0 ? (
              <p className="rounded-lg border border-dashed border-[#263A99]/20 bg-white/60 p-6 text-center text-sm text-zinc-500">
                Brak opinii. Dodaj pierwszą!
              </p>
            ) : (
              <div className="space-y-4">
                {opinions.map((opinion) => (
                  <OpinionView key={opinion.id} opinion={opinion} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}
