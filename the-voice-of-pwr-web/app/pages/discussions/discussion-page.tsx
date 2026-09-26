"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import NavBar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { MOCK_THREADS, type Comment } from "./mockThreads";

import {
  ArrowLeft,
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
  Send,
  Clock,
  ShieldCheck,
  Flag,
} from "lucide-react";

export default function ThreadDetailPage() {
  const params = useParams();
  const threadId = params?.id as string;

  const thread = MOCK_THREADS[threadId] || {
    id: threadId,
    title: "Ogólna dyskusja o wybranym zagadnieniu",
    category: "Dyskusje",
    author: "Anonimowy Student",
    role: "PWr",
    time: "Niedawno",
    content:
      "Szczegółowa treść tego wątku jest niedostępna lub została przeniesiona. Możesz dodać własny komentarz poniżej.",
    likes: 5,
    commentsCount: 0,
    tags: ["Ogólne", "PWr"],
    comments: [],
  };

  const [likes, setLikes] = useState(thread.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(thread.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleAddComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    const commentObj: Comment = {
      id: Date.now().toString(),
      author: "Ty",
      role: "Studentka PWr",
      time: "Przed chwilą",
      content: newComment,
      likes: 0,
    };

    setComments((prev) => [...prev, commentObj]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-zinc-900 font-sans">
      <NavBar />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-[#263A99] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do strony głównej
          </Link>
        </div>

        <article className="bg-white rounded-xl border border-[#263A99]/10 shadow-sm p-6 sm:p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#97B4DE]/20 text-[#263A99] font-bold">
                {thread.author.charAt(0)}
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-zinc-900">
                    {thread.author}
                  </span>

                  <Badge
                    variant="secondary"
                    className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                  >
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    {thread.role}
                  </Badge>
                </div>

                <div className="flex items-center text-xs text-zinc-500 mt-0.5">
                  <Clock className="w-3 h-3 mr-1" />
                  {thread.time}
                </div>
              </div>
            </div>

            <Badge
              variant="secondary"
              className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
            >
              {thread.category}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-3">
            {thread.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {thread.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
              >
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed text-base mb-8 border-b border-zinc-100 pb-6">
            <p>{thread.content}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleLike}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-3 py-1.5 rounded-lg ${
                  hasLiked
                    ? "bg-rose-50 text-rose-600"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    hasLiked ? "fill-rose-600 text-rose-600" : ""
                  }`}
                />
                <span>{likes}</span>
              </button>

              <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 bg-zinc-100 px-3 py-1.5 rounded-lg">
                <MessageSquare className="w-4 h-4 text-[#263A99]" />
                <span>{comments.length}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-500 hover:text-zinc-900"
              >
                <Bookmark className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-500 hover:text-zinc-900"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </article>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900">
              Dyskusja ({comments.length})
            </h2>
          </div>

          <form
            onSubmit={handleAddComment}
            className="bg-white rounded-xl border border-[#263A99]/10 p-4 sm:p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-zinc-800 mb-2">
              Dodaj swoją wypowiedź
            </h3>

            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Napisz merytoryczny komentarz jako student..."
              className="flex min-h-[100px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263A99] mb-4 resize-none"
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-[#263A99] text-white hover:bg-[#263A99]/90 font-medium px-5"
              >
                <Send className="w-4 h-4 mr-2" />
                Opublikuj odpowiedź
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-center text-zinc-500 py-8 bg-white rounded-xl border border-zinc-100">
                Brak komentarzy w tym wątku. Bądź pierwszy!
              </p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-xl border border-zinc-200/80 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 font-bold text-sm">
                        {comment.author.charAt(0)}
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-zinc-900">
                            {comment.author}
                          </span>

                          <Badge
                            variant="secondary"
                            className="border-none bg-[#E6E5F0] font-medium text-[#263A99]"
                          >
                            {comment.role}
                          </Badge>
                        </div>

                        <span className="text-xs text-zinc-400">
                          {comment.time}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="text-zinc-400 hover:text-zinc-600"
                    >
                      <Flag className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-zinc-700 text-sm leading-relaxed mb-3">
                    {comment.content}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-[#263A99] bg-zinc-50 hover:bg-[#97B4DE]/10 px-2.5 py-1 rounded transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}