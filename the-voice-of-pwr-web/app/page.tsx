"use client";
import { useState } from "react";
import OpinionForm from "@/components/OpinionForm";
import { opinionCardsData } from "@/data/opinionCardsData";
import LecturerCard from "@/components/LecturerCard";
import BackLink from "@/components/layout/BackLink";
export default function Home() {
  const [isOpinionForm, setIsOpinionForm] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      {isOpinionForm ? (
        <BackLink
          href="/"
          title="Wróć do widoku opinii"
          onClick={(e) => {
            e.preventDefault();
            setIsOpinionForm(!isOpinionForm);
          }}
        />
      ) : (
        <button
          className="inline-flex items-center text-sm font-medium text-zinc-600"
          onClick={() => {
            setIsOpinionForm(!isOpinionForm);
          }}
        >
          {isOpinionForm ? "Zobacz opinie" : "Dodaj opinie"}
        </button>
      )}

      {isOpinionForm ? (
        <div className="flex flex-1 w-full items-center justify-center px-4">
          <OpinionForm onSuccess={() => setIsOpinionForm(false)} />
        </div>
      ) : (
        <div className="flex-1 w-full">
          {opinionCardsData.map((el, index) => (
            <LecturerCard
              key={index}
              id={el.id}
              username={el.username}
              date={el.date}
              course={el.course}
              title={el.title}
              description={el.description}
              grade={el.grade}
            />
          ))}
        </div>
      )}
    </main>
  );
}
