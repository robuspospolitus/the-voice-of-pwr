export type Faculty = {
  id: string;
  name: string;
};

export type StudyField = {
  id: string;
  name: string;
  facultyId: string;
};

export type Course = {
  id: string;
  name: string;
  studyFieldId: string;
  semester: string | null;
};

export type CourseReview = {
  id: string;
  rating: number;
  difficulty: number;
  content: string;
  createdAt: string;
};
