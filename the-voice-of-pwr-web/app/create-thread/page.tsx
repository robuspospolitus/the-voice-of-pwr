"use client";

import { useState } from "react";
import Link from "next/link";

import NavBar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  ArrowLeft,
  CheckCircle2,
  Plus,
  Tag,
} from "lucide-react";

const CATEGORIES = [
  "Egzaminy i Notatki",
  "Koła Naukowe i Projekty",
  "Kariera i Staże",
  "Sprzęt i Oprogramowanie",
  "Przedmioty",
  "Akademiki",
  "Prowadzący",
];

export default function CreateThreadPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titleLimit = 120;
  const contentLimit = 1200;

  const isFormValid =
    title.trim().length >= 8 &&
    content.trim().length >= 30 &&
    Boolean(category);

  const parsedTags = tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 5);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    // podpiac pod baze potem 
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-zinc-900 font-sans">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:text-[#263A99]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Wróć do forum
        </Link>

        <section className="mb-8 rounded-2xl border border-[#263A99]/10 bg-white shadow-sm">
          <div className="rounded-t-2xl bg-[#263A99] px-6 py-7 text-white sm:px-8">
            <Badge className="mb-4 border-white/20 bg-white/15 text-white hover:bg-white/15">
              Nowy wątek
            </Badge>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Utwórz wątek
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Dodaj temat, wybierz kategorię i opisz, czego dotyczy dyskusja.
            </p>
          </div>
        </section>

        {isSubmitted ? (
          <section className="rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h2 className="text-2xl font-bold text-zinc-900">
              Wątek został utworzony
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
              To na razie widok frontendowy. Zapis do bazy zostanie dodany po
              podpięciu API.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#263A99] text-white hover:bg-[#263A99]/90"
              >
                Utwórz kolejny wątek
              </Button>

              <Link
                href="/"
                className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
              >
                Wróć na stronę główną
              </Link>
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <section className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#263A99]/10 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-zinc-900">
                    Szczegóły wątku
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Uzupełnij podstawowe informacje.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <label
                        htmlFor="title"
                        className="text-sm font-semibold text-zinc-800"
                      >
                        Tytuł
                      </label>

                      <span className="text-xs text-zinc-400">
                        {title.length}/{titleLimit}
                      </span>
                    </div>

                    <Input
                      id="title"
                      value={title}
                      maxLength={titleLimit}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Np. Materiały do kolokwium z Analizy 2"
                      className="h-11 border-zinc-200 bg-white text-sm focus-visible:ring-[#263A99]"
                    />

                    <p className="mt-2 text-xs text-zinc-500">
                      Minimum 8 znaków.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-semibold text-zinc-800"
                    >
                      Kategoria
                    </label>

                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="h-11 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition-colors focus:border-[#263A99] focus:ring-2 focus:ring-[#263A99]/20"
                    >
                      {CATEGORIES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <label
                        htmlFor="content"
                        className="text-sm font-semibold text-zinc-800"
                      >
                        Treść
                      </label>

                      <span className="text-xs text-zinc-400">
                        {content.length}/{contentLimit}
                      </span>
                    </div>

                    <textarea
                      id="content"
                      value={content}
                      maxLength={contentLimit}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Napisz, o co chcesz zapytać albo czym chcesz się podzielić."
                      className="min-h-[180px] w-full resize-none rounded-md border border-zinc-200 bg-white px-3 py-3 text-sm leading-relaxed text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-[#263A99] focus:ring-2 focus:ring-[#263A99]/20"
                    />

                    <p className="mt-2 text-xs text-zinc-500">
                      Minimum 30 znaków. Dodaj trochę kontekstu, żeby inni
                      wiedzieli, o co chodzi.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-800"
                    >
                      <Tag className="h-4 w-4 text-[#263A99]" />
                      Tagi
                    </label>

                    <Input
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="Analiza, kolokwium, notatki"
                      className="h-11 border-zinc-200 bg-white text-sm focus-visible:ring-[#263A99]"
                    />

                    <p className="mt-2 text-xs text-zinc-500">
                      Oddziel tagi przecinkami.
                    </p>

                    {parsedTags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {parsedTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-[#97B4DE]/20 px-2.5 py-1 text-xs font-medium text-[#263A99]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col-reverse gap-3 border-t border-zinc-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-500">
                      Po podpięciu backendu wątek będzie zapisywany w bazie.
                    </p>

                    <Button
                      type="submit"
                      disabled={!isFormValid}
                      className="bg-[#263A99] text-white hover:bg-[#263A99]/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Opublikuj wątek
                    </Button>
                  </div>
                </div>
              </form>
            </section>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-[#263A99]/10 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-zinc-900">
                  Wskazówki
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  <li> Nadaj konkretny tytuł.</li>
                  <li> Wybierz pasującą kategorię.</li>
                  <li> Dodaj tagi, jeśli temat ich wymaga.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#263A99]/10 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-zinc-900">
                  Podgląd
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  Tak mniej więcej będzie wyglądać karta wątku.
                </p>

                <div className="mt-4 rounded-xl border border-zinc-100 bg-[#F8F9FC] p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-sm bg-[#97B4DE]/20 px-2 py-0.5 font-semibold text-[#263A99]">
                      {category}
                    </span>

                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-500">przez Ciebie</span>
                  </div>

                  <h4 className="line-clamp-2 text-sm font-bold leading-snug text-zinc-900">
                    {title || "Tutaj pojawi się tytuł wątku"}
                  </h4>

                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-500">
                    {content || "Tutaj pojawi się krótki fragment treści."}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(parsedTags.length > 0 ? parsedTags : ["Tag", "PWr"]).map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-sm bg-white px-2 py-0.5 text-[11px] font-medium text-[#263A99]"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#263A99]/10 bg-[#263A99] p-5 text-white shadow-sm">
                <h3 className="text-sm font-bold">
                  GłosPWr
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Forum jest miejscem na pytania o zajęcia, notatki, projekty i
                  życie na uczelni.
                </p>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}