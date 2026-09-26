"use client";
import { useState } from "react";
import type { LecturerDetails } from "@/lib/types/lecturer";
import BackLink from "@/components/layout/BackLink";
import LecturerHeader from "@/components/layout/LecturerHeader";
import OpinionView from "@/components/OpinionView";
import OpinionForm from "@/components/OpinionForm";
import { LecturerOpinion } from "@/lib/types/lecturer";
import { BookPlus, Scroll } from "lucide-react";
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
      <div className=" flex items-center justify-between">
        <BackLink title="Wróć do listy" href="/lecturers" />
        <button
          className="group/add text-xs cursor-pointer font-normal px-4 py-2 bg-prim text-white rounded-full transition duration-200 hover:-translate-y-0.5 "
          onClick={() => setAddOpinionForm(!isAddOpinionForm)}
        >
          <span className="flex flex-row gap-2 transition duration-200 group-hover/add:-translate-y-0.5">
            {isAddOpinionForm ? <Scroll size="16" /> : <BookPlus size="16" />}
            {isAddOpinionForm ? "Zobacz opinie" : "Dodaj opinię"}
          </span>
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
          <section className="space-y-6 my-6">
            {opinions.map((opinion) => (
              <OpinionView key={opinion.id} opinion={opinion} />
            ))}
          </section>
        </>
      )}
    </>
  );
}
