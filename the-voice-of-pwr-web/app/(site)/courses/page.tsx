import {
  getCourses,
  getFaculties,
  getStudyFields,
} from "@/lib/api/courses";

import CoursesBrowser from "./courses-browser";

export default async function CoursesPage() {
  const [faculties, fields, courses] = await Promise.all([
    getFaculties(),
    getStudyFields(),
    getCourses(),
  ]);

  return (
    <CoursesBrowser faculties={faculties} fields={fields} courses={courses} />
  );
}
