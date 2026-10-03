import { notFound } from "next/navigation";

import { getCourse, getStudyField } from "@/lib/api/courses";

import CourseView from "./course-view";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ fieldId: string; courseId: string }>;
}) {
  const { fieldId, courseId } = await params;
  const [course, field] = await Promise.all([
    getCourse(courseId),
    getStudyField(fieldId),
  ]);

  if (!course || !field || course.studyFieldId !== field.id) notFound();

  return <CourseView course={course} field={field} />;
}
