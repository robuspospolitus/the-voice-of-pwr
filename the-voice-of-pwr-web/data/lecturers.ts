import type { LecturerDetails } from "@/lib/types/lecturer";

export const lecturersMock: LecturerDetails[] = [
  {
    id: "lecturer-jan-kowalski",
    name: "Jan",
    surname: "Kowalski",
    faculties: [
      {
        faculty: {
          shortcut: "W4",
          fullName: "Wydział Informatyki i Telekomunikacji",
        },
      },
    ],
    classes: [{ course: { id: 1, fullName: "Bazy Danych" } }],
    opinions: [],
    _count: { opinions: 0 },
  },
];
