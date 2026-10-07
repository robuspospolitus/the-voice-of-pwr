"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { Course, Faculty, StudyField } from "@/lib/types/StudyField";

const API_URL = process.env.API_URL ?? "http://127.0.0.1:3001";

type ApiFaculty = {
  shortcut: string;
  fullName: string;
};

type ApiStudyField = {
  shortcut: string;
  fullName: string;
  facultyShortcut: string;
};

type ApiCourse = {
  id: number;
  fullName: string;
  fieldOfStudyShortcut: string;
  semester: string | null;
};

function mapFaculty(faculty: ApiFaculty): Faculty {
  return {
    id: faculty.shortcut,
    name: faculty.fullName,
  };
}

function mapStudyField(field: ApiStudyField): StudyField {
  return {
    id: field.shortcut,
    name: field.fullName,
    facultyId: field.facultyShortcut,
  };
}

function mapCourse(course: ApiCourse): Course {
  return {
    id: String(course.id),
    name: course.fullName,
    studyFieldId: course.fieldOfStudyShortcut,
    semester: course.semester,
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

async function authorizedHeaders(): Promise<HeadersInit> {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token) redirect("/signin");
  return { Authorization: `Bearer ${token}` };
}

async function getJson<T>(path: string): Promise<T | null> {
  const res = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
    headers: await authorizedHeaders(),
  });
  if (res.status === 401) redirect("/signin");
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await errorMessage(res));
  return (await res.json()) as T;
}

export async function getFaculties(): Promise<Faculty[]> {
  const faculties = await getJson<ApiFaculty[]>("/api/v1/faculties");
  return (faculties ?? []).map(mapFaculty);
}

export async function getFaculty(shortcut: string): Promise<Faculty | null> {
  const faculty = await getJson<ApiFaculty>(
    `/api/v1/faculties/${encodeURIComponent(shortcut)}`,
  );
  return faculty ? mapFaculty(faculty) : null;
}

export async function getStudyFields(): Promise<StudyField[]> {
  const fields = await getJson<ApiStudyField[]>("/api/v1/fields-of-study");
  return (fields ?? []).map(mapStudyField);
}

export async function getStudyField(
  shortcut: string,
): Promise<StudyField | null> {
  const field = await getJson<ApiStudyField>(
    `/api/v1/fields-of-study/${encodeURIComponent(shortcut)}`,
  );
  return field ? mapStudyField(field) : null;
}

export async function getCourses(): Promise<Course[]> {
  const courses = await getJson<ApiCourse[]>("/api/v1/courses");
  return (courses ?? []).map(mapCourse);
}

export async function getCourse(id: string): Promise<Course | null> {
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) return null;

  const course = await getJson<ApiCourse>(`/api/v1/courses/${numericId}`);
  return course ? mapCourse(course) : null;
}
