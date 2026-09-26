"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MessageSquare,
  ArrowUp,
  ArrowDown,
  Pin,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES, HOT_TOPICS } from "./categories";
import NavBar from "@/components/navbar/navbar";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("hot");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-zinc-900 font-sans selection:bg-[#97B4DE]/40">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 space-y-12">
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Studenci Politechniki Wrocławskiej
            </h1>

            <p className="text-base text-zinc-600 leading-relaxed">
              Notatki, opinie, projekty i studenckie forum. Dołącz do
              społeczności politechnicznej i bądź na bieżąco.
            </p>
          </div>

          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#263A99]/60" />

            <Input
              placeholder="Szukaj wątków lub przedmiotów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white border-[#263A99]/10 shadow-sm focus-visible:ring-[#97B4DE] h-10 rounded-md text-sm"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6" id="feed">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#263A99]/10 pb-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                Najnowsze wpisy
              </h2>

              <Tabs
                defaultValue="hot"
                value={activeTab}
                onValueChange={setActiveTab}
              >
                <TabsList className="bg-[#97B4DE]/20 p-1 rounded-md">
                  <TabsTrigger
                    value="hot"
                    className="text-xs font-medium rounded-sm data-[state=active]:bg-[#263A99] data-[state=active]:text-white"
                  >
                    Popularne
                  </TabsTrigger>

                  <TabsTrigger
                    value="new"
                    className="text-xs font-medium rounded-sm data-[state=active]:bg-[#263A99] data-[state=active]:text-white"
                  >
                    Najnowsze
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-4">
              {HOT_TOPICS.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/discussions/${topic.id}`}
                  className="block group"
                >
                  <div className="bg-white border border-[#263A99]/10 p-4 rounded-lg flex gap-4 transition-all hover:border-[#97B4DE] shadow-sm">
                    <div
                      className="flex flex-col items-center gap-1 shrink-0"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 text-zinc-400 hover:text-[#263A99] hover:bg-[#97B4DE]/20 rounded-md"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </Button>

                      <span className="text-sm font-medium text-[#263A99]">
                        {topic.upvotes}
                      </span>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 text-zinc-400 hover:text-[#263A99] hover:bg-[#97B4DE]/20 rounded-md"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex-1 min-w-0 py-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                        {topic.isPinned && (
                          <Badge
                            variant="secondary"
                            className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                          >
                            <Pin className="mr-1 h-3 w-3" />
                            Przypięty
                          </Badge>
                        )}

                        <Badge
                          variant="secondary"
                          className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                        >
                          {topic.category}
                        </Badge>

                        <span className="text-[#97B4DE]">•</span>

                        <span className="text-zinc-500">
                          przez {topic.author.name}
                        </span>

                        <span className="text-[#97B4DE]">•</span>

                        <span className="text-zinc-500">{topic.createdAt}</span>
                      </div>

                      <h3 className="text-base font-semibold text-zinc-900 group-hover:text-[#263A99] leading-tight mb-3 transition-colors">
                        {topic.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {topic.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
                        <span className="flex items-center gap-1.5 hover:text-[#263A99] transition-colors">
                          <MessageSquare className="w-3.5 h-3.5 text-[#97B4DE]" />
                          {topic.replies} komentarzy
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                className="text-sm font-medium text-[#263A99] border-[#263A99]/20 hover:bg-[#97B4DE]/10 hover:text-[#263A99]"
              >
                Pokaż więcej dyskusji
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Card className="border-[#263A99]/10 shadow-sm rounded-lg bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-zinc-900">
                  O forum
                </CardTitle>
              </CardHeader>

              <CardContent className="text-sm text-zinc-600 space-y-4">
                <p>
                  Oficjalna przestrzeń do wymiany wiedzy, notatek i opinii dla
                  studentów uczelni technicznych i uniwersytetów we Wrocławiu.
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-[#263A99]/10">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Zarejestrowanych</span>
                    <span className="font-medium text-[#263A99]">12,402</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Aktywnych dzisiaj</span>
                    <span className="font-medium text-[#263A99]">842</span>
                  </div>
                </div>

                <Link
                  href="/discussions/create-thread"
                  className="mt-2 inline-flex h-9 w-full items-center justify-center rounded-md bg-[#263A99] px-4 text-sm font-medium text-white shadow-none transition-colors hover:bg-[#263A99]/90"
                >
                  Utwórz wątek
                </Link>
              </CardContent>
            </Card>

            <Card
              className="border-[#263A99]/10 shadow-sm rounded-lg bg-white"
              id="categories"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-zinc-900">
                  Główne kategorie
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-1 p-2 pt-0">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-[#97B4DE]/10 cursor-pointer group transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-zinc-700 group-hover:text-[#263A99] transition-colors">
                        {cat.name}
                      </span>

                      <span className="text-xs text-zinc-400 group-hover:text-[#263A99]/70 transition-colors">
                        {cat.topicsCount} wątków
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-[#97B4DE] group-hover:text-[#263A99] transition-colors" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
