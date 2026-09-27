export type Faculty = {
  id: string;
  name: string;
};

export type StudyField = {
  id: string;
  name: string;
  facultyId: string;
  degree: "I stopień";
  form: "stacjonarne";
  languages: ("pl" | "en")[];
  semesters: number | null;
  programFile: string | null;
};

export type Course = {
  id: string;
  name: string;
  studyFieldId: string;
  code: string | null;
  semester: number | null;
  ects: number | null;
};

export type CourseReview = {
  id: string;
  rating: number;
  difficulty: number;
  content: string;
  createdAt: string;
};
