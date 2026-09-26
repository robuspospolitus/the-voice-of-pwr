export type Lecturer = {
  id: string;
  name: string;
  surname: string;
};

export type LecturerOpinion = {
  id: string;
  userId: number;
  lecturerId: string;
  grade: number;
  title: string;
  description: string | null;
  user?: { name: string };
  date: string;
};

export type LecturerDetails = Lecturer & {
  faculties?: { faculty: { shortcut: string; fullName: string } }[];
  classes?: { course: { id: number; fullName: string } }[];
  opinions?: LecturerOpinion[];
  _count?: { opinions: number };
};
