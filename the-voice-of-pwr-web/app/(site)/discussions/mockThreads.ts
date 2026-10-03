export type Comment = {
  id: string;
  author: string;
  role: string;
  time: string;
  content: string;
  likes: number;
};

type Thread = {
  id: string;
  title: string;
  category: string;
  author: string;
  role: string;
  time: string;
  content: string;
  likes: number;
  commentsCount: number;
  tags: string[];
  comments: Comment[];
};

export const MOCK_THREADS: Record<string, Thread> = {
  "post-1": {
    id: "post-1",
    title: "Pytania do kolokwium z Analizy Matematycznej 2",
    category: "Egzaminy i Notatki",
    author: "Mateusz_W4",
    role: "Starosta roku",
    time: "15 min temu",
    content:
      "Hej, wrzucajcie tutaj pytania i materiały do kolokwium z Analizy 2. Jak ktoś ma stare kolokwia albo wie, na co szczególnie zwrócić uwagę, to dajcie znać w komentarzach.",
    likes: 34,
    commentsCount: 2,
    tags: ["Analiza", "Kolokwium", "Notatki"],
    comments: [
      {
        id: "c1",
        author: "Mati123",
        role: "Student W4",
        time: "10 min temu",
        content:
          "Na pewno warto powtórzyć całki niewłaściwe. Na poprzednim terminie było z tego zadanie.",
        likes: 6,
      },
      {
        id: "c2",
        author: "Kasia_Studia",
        role: "Studentka PWr",
        time: "5 min temu",
        content:
          "Mam gdzieś stare zadania z ćwiczeń, mogę później wrzucić.",
        likes: 3,
      },
    ],
  },

  "post-2": {
    id: "post-2",
    title: "Szukamy osób do zespołu na hackathon",
    category: "Koła Naukowe i Projekty",
    author: "Karolina_Dev",
    role: "KN Solvro",
    time: "1 godz. temu",
    content:
      "Hej, szukamy jeszcze dwóch osób do zespołu na hackathon. Przydałby się ktoś do frontendu w React i ktoś do backendu. Jak ktoś jest zainteresowany, to piszcie tutaj.",
    likes: 27,
    commentsCount: 2,
    tags: ["Hackathon", "React", "Backend"],
    comments: [
      {
        id: "c3",
        author: "FrontendowyKucykPony",
        role: "Student Informatyki",
        time: "40 min temu",
        content:
          "Mogę pomóc przy froncie, robiłem już trochę w React i Next.js.",
        likes: 5,
      },
      {
        id: "c4",
        author: "BackendPWr",
        role: "Student WIT",
        time: "25 min temu",
        content:
          "Ja mogę ogarnąć backend, tylko zależy jeszcze kiedy dokładnie jest hackathon.",
        likes: 2,
      },
    ],
  },

  "post-3": {
    id: "post-3",
    title: "Praca na pół etatu na 2 roku informatyki",
    category: "Kariera i Staże",
    author: "Piotr_K",
    role: "Student",
    time: "3 godz. temu",
    content:
      "Myślę nad pracą na pół etatu, ale nie wiem czy na drugim roku da się to normalnie połączyć ze studiami. Jak to u was wygląda? Lepiej próbować teraz czy poczekać do wakacji?",
    likes: 41,
    commentsCount: 2,
    tags: ["Praca", "Staże", "Studia"],
    comments: [
      {
        id: "c5",
        author: "DevStudent",
        role: "Student 3 roku",
        time: "2 godz. temu",
        content:
          "Da się, ale najlepiej jak masz elastyczne godziny. Przed sesją bywa ciężko.",
        likes: 9,
      },
      {
        id: "c6",
        author: "Ola",
        role: "Junior Frontend Developer",
        time: "1 godz. temu",
        content:
          "Ja zaczynałam od stażu wakacyjnego i moim zdaniem było łatwiej niż zaczynać pracę w środku semestru.",
        likes: 7,
      },
    ],
  },
};