"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";

import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import RatingStars from "@/components/courses/rating-stars";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { COURSES } from "./data/courses";
import { STUDY_FIELDS } from "./data/study-fields";

import type { CourseReview } from "./types";

const REVIEW_LIMIT = 500;

const reviewSchema = z.object({
  rating: z.coerce.number().min(1).max(5),
  difficulty: z.coerce.number().min(1).max(5),

  content: z
    .string()
    .trim()
    .min(10, "Opinia musi mieć minimum 10 znaków.")
    .max(REVIEW_LIMIT, "Opinia jest za długa."),
});

export default function CoursePage() {
  const params = useParams();

  const fieldId = params.fieldId as string;
  const courseId = params.courseId as string;

  const course = COURSES.find(
    (item) => item.id === courseId && item.studyFieldId === fieldId,
  );

  const field = STUDY_FIELDS.find((item) => item.id === fieldId);

  const [rating, setRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [content, setContent] = useState("");
  const [reviews, setReviews] = useState<CourseReview[]>([]);

  if (!course || !field) {
    return (
      <div className="min-h-screen bg-[#fcf9ff] text-zinc-900">
        <NavBar />

        <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <Card className="border-[#263A99]/10 bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <h1 className="text-xl font-bold">Nie znaleziono przedmiotu</h1>

              <p className="mt-2 text-sm text-zinc-500">
                Przedmiot nie istnieje albo został usunięty.
              </p>

              <Link
                href="/courses"
                className="mt-5 inline-flex text-sm font-medium text-[#263A99] hover:underline"
              >
                Wróć do przedmiotów
              </Link>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    );
  }

  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : null;

  const averageDifficulty = reviews.length
    ? reviews.reduce((sum, review) => sum + review.difficulty, 0) /
      reviews.length
    : null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = reviewSchema.safeParse({
      rating: formData.get("rating"),
      difficulty: formData.get("difficulty"),
      content: formData.get("content"),
    });

    if (!result.success) {
      console.error(result.error.flatten());
      return;
    }

    const newReview: CourseReview = {
      id: Date.now().toString(),
      rating: result.data.rating,
      difficulty: result.data.difficulty,
      content: result.data.content,
      createdAt: "Przed chwilą",
    };

    setReviews((prev) => [newReview, ...prev]);

    setRating(0);
    setDifficulty(0);
    setContent("");
  };

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-zinc-900 font-sans">
      <NavBar />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link
          href={`/courses/${field.id}`}
          className="mb-6 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-[#263A99]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {field.name}
        </Link>

        <section className="mb-8 overflow-hidden rounded-2xl border border-[#263A99]/10 bg-white shadow-sm">
          <div className="bg-[#263A99] px-6 py-7 text-white sm:px-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {course.semester && (
                <Badge
                  variant="secondary"
                  className="border-none bg-white/15 font-medium text-white"
                >
                  Semestr {course.semester}
                </Badge>
              )}

              {course.ects && (
                <Badge
                  variant="secondary"
                  className="border-none bg-white/15 font-medium text-white"
                >
                  {course.ects} ECTS
                </Badge>
              )}
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {course.name}
            </h1>

            <p className="mt-3 text-sm text-white/80">
              {field.name}
              {course.code && ` • ${course.code}`}
            </p>
          </div>
        </section>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Card className="border-[#263A99]/10 bg-white shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-medium text-zinc-500">
                Ocena studentów
              </p>

              {averageRating !== null ? (
                <>
                  <div className="mt-2 flex items-center gap-3">
                    <RatingStars value={averageRating} />

                    <span className="font-bold text-[#263A99]">
                      {averageRating.toFixed(1)}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400">
                    {reviews.length} opinii
                  </p>
                </>
              ) : (
                <p className="mt-2 font-semibold">Brak ocen</p>
              )}
            </CardContent>
          </Card>

          <Card className="border-[#263A99]/10 bg-white shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-medium text-zinc-500">
                Średnia trudność
              </p>

              <p className="mt-2 text-xl font-bold text-[#263A99]">
                {averageDifficulty !== null
                  ? `${averageDifficulty.toFixed(1)}/5`
                  : "Brak ocen"}
              </p>

              <p className="mt-2 text-xs text-zinc-400">
                1 — bardzo łatwy, 5 — bardzo trudny
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-[#263A99]/10 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Oceń przedmiot</CardTitle>

            <p className="text-sm text-zinc-500">
              Podziel się doświadczeniem z innymi studentami.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-800">
                  Ogólna ocena
                </label>

                <RatingStars value={rating} onChange={setRating} />

                <input type="hidden" name="rating" value={rating} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-800">
                  Trudność
                </label>

                <RatingStars value={difficulty} onChange={setDifficulty} />

                <input type="hidden" name="difficulty" value={difficulty} />

                <p className="mt-2 text-xs text-zinc-500">
                  1 - bardzo łatwy, 5 - bardzo trudny
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="content"
                    className="text-sm font-semibold text-zinc-800"
                  >
                    Twoja opinia
                  </label>

                  <span className="text-xs text-zinc-400">
                    {content.length}/{REVIEW_LIMIT}
                  </span>
                </div>

                <textarea
                  id="content"
                  name="content"
                  value={content}
                  minLength={10}
                  maxLength={REVIEW_LIMIT}
                  required
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Co warto wiedzieć o tym przedmiocie?"
                  className="min-h-[130px] w-full resize-none rounded-md border border-zinc-200 bg-white px-3 py-3 text-sm leading-relaxed outline-none placeholder:text-zinc-400 focus:border-[#263A99] focus:ring-2 focus:ring-[#263A99]/20"
                />

                <p className="mt-2 text-xs text-zinc-500">
                  Minimum 10 znaków, maksymalnie {REVIEW_LIMIT}.
                </p>
              </div>

              <div className="flex justify-end border-t border-zinc-100 pt-5">
                <Button
                  type="submit"
                  className="bg-[#263A99] text-white hover:bg-[#263A99]/90"
                >
                  Dodaj opinię
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <section>
          <h2 className="mb-4 text-xl font-bold">Opinie ({reviews.length})</h2>

          {reviews.length === 0 ? (
            <Card className="border-[#263A99]/10 bg-white shadow-sm">
              <CardContent className="p-8 text-center">
                <p className="font-semibold">
                  Ten przedmiot nie ma jeszcze opinii
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Możesz być pierwszą osobą, która go oceni.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="border-[#263A99]/10 bg-white shadow-sm"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <RatingStars value={review.rating} />

                        <p className="mt-2 text-xs text-zinc-500">
                          Trudność: {review.difficulty}/5
                        </p>
                      </div>

                      <span className="text-xs text-zinc-400">
                        {review.createdAt}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                      {review.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
