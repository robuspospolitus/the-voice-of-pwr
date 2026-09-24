import type { LecturerDetails } from "@/lib/types/lecturer";

export const lecturersMock: LecturerDetails[] = [
  {
    id: crypto.randomUUID(),
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
    opinions: [
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 4,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
    ],
    _count: { opinions: 1 },
  },
  {
    id: crypto.randomUUID(),
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
    opinions: [
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 2,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 5,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 5,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 5,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 5,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
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
    opinions: [
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 5,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
    ],
    _count: { opinions: 1 },
  },
  {
    id: crypto.randomUUID(),
    name: "Jan",
    surname: "Kowalski",
    faculties: [
      {
        faculty: {
          shortcut: "W5",
          fullName: "Inny Wydział",
        },
      },
    ],
    classes: [{ course: { id: 1, fullName: "Bazy Danych" } }],
    opinions: [
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 3,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 2,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 2,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
    ],
    _count: { opinions: 1 },
  },
  {
    id: crypto.randomUUID(),
    name: "Jan",
    surname: "Kowalski",
    faculties: [
      {
        faculty: {
          shortcut: "W6",
          fullName: "Wydział mametamtyki",
        },
      },
    ],
    classes: [{ course: { id: 1, fullName: "Bazy Danych" } }],
    opinions: [
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 5,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 3,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
      {
        id: crypto.randomUUID(),
        userId: 1,
        lecturerId: 1,
        title: "Niesamowite",
        grade: 2,
        description: "Świetnie tłumaczy zagadnienia!",
        user: { name: "Janek" },
      },
    ],
    _count: { opinions: 1 },
  },
];
