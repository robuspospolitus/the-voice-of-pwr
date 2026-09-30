"use server";

import type { LecturerDetails, LecturerOpinion } from "@/lib/types/lecturer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const API_URL = process.env.API_URL ?? "http://127.0.0.1:3001";

type ApiOpinion = {
  id: number;
  userId: number;
  lecturerId: number;
  stars: number;
  description: string | null;
  user?: { name: string };
};

type ApiLecturer = {
  id: number;
  name: string;
  surname: string;
  faculties?: { faculty: { shortcut: string; fullName: string } }[];
  classes?: { course: { id: number; fullName: string } }[];
  opinions?: ApiOpinion[];
};

function mapOpinion(opinion: ApiOpinion): LecturerOpinion {
  return {
    id: String(opinion.id),
    userId: opinion.userId,
    lecturerId: String(opinion.lecturerId),
    grade: opinion.stars,
    title: "",
    description: opinion.description,
    user: opinion.user,
    date: "",
  };
}

function mapLecturer(lecturer: ApiLecturer): LecturerDetails {
  const opinions = lecturer.opinions?.map(mapOpinion) ?? [];
  return {
    id: String(lecturer.id),
    name: lecturer.name,
    surname: lecturer.surname,
    faculties: lecturer.faculties,
    classes: lecturer.classes,
    opinions,
    _count: { opinions: opinions.length },
  };
}

async function errorMessage(res: Response) {
  try {
    const body = (await res.json()) as { message?: string | string[] };
    if (Array.isArray(body.message)) return body.message.join(", ");
    if (body.message) return body.message;
  } catch {}
  return `Request failed (${res.status})`;
}
async function authHeaders(): Promise<HeadersInit> {
  const token = (await cookies()).get("accessToken")?.value;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function authorizedHeaders(): Promise<HeadersInit> {
  const headers = await authHeaders();
  if (!("Authorization" in headers)) redirect("/signin");
  return headers;
}

export async function getLecturers(): Promise<LecturerDetails[]> {
  const res = await fetch(`${API_URL}/api/v1/lecturers`, {
    cache: "no-store",
    headers: await authorizedHeaders(),
  });
  if (res.status === 401) redirect("/signin");
  if (!res.ok) throw new Error(await errorMessage(res));

  const lecturers = (await res.json()) as ApiLecturer[];
  return lecturers.map(mapLecturer);
}

export async function getLecturer(id: string): Promise<LecturerDetails | null> {
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) return null;

  const res = await fetch(`${API_URL}/api/v1/lecturers/${numericId}`, {
    cache: "no-store",
    headers: await authorizedHeaders(),
  });
  if (res.status === 401) redirect("/signin");
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await errorMessage(res));

  const lecturer = (await res.json()) as ApiLecturer;
  return mapLecturer(lecturer);
}

export async function createLecturerOpinion(input: {
  lecturerId: number;
  stars: number;
  description: string;
  title: string;
}): Promise<
  { ok: true; opinion: LecturerOpinion } | { ok: false; message: string }
> {
  const headers = await authHeaders();
  if (!("Authorization" in headers)) {
    return { ok: false, message: "Zaloguj się, żeby dodać opinię" };
  }

  const res = await fetch(`${API_URL}/api/v1/lecturer-opinions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    cache: "no-store",
    body: JSON.stringify({
      lecturerId: input.lecturerId,
      stars: input.stars,
      description: input.description,
    }),
  });

  if (!res.ok) {
    return { ok: false, message: await errorMessage(res) };
  }

  const created = (await res.json()) as ApiOpinion;
  return {
    ok: true,
    opinion: {
      ...mapOpinion(created),
      title: input.title,
      date: new Date().toISOString(),
    },
  };
}
