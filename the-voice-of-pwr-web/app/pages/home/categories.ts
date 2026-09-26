export const CATEGORIES = [
  {
    id: "notes",
    name: "Egzaminy i Notatki",
    slug: "egzaminy-notatki",
    description:
      "Baza skryptów, pytań z kolokwiów i opracowań materiałów z wykładów.",
    topicsCount: 4120,
    postsCount: 18450,
  },
  {
    id: "projects",
    name: "Koła Naukowe i Projekty",
    slug: "kola-i-projekty",
    description:
      "Rekrutacje do kół, poszukiwanie osób do zespołów na hackathony.",
    topicsCount: 980,
    postsCount: 3420,
  },
  {
    id: "career",
    name: "Kariera i Staże",
    slug: "kariera-staze",
    description:
      "Oferty pracy dla studentów, weryfikacja CV oraz porady rekrutacyjne.",
    topicsCount: 2150,
    postsCount: 8900,
  },
  {
    id: "tech",
    name: "Sprzęt i Oprogramowanie",
    slug: "sprzet-software",
    description:
      "Dyskusje o laptopach na studia, konfiguracji środowisk i licencjach.",
    topicsCount: 1430,
    postsCount: 5120,
  },
];

export const HOT_TOPICS = [
  {
    id: "post-1",
    title: "Oficjalny wątek z pytaniami do kolokwium z Analizy Matematycznej 2",
    category: "Egzaminy i Notatki",
    author: {
      name: "Mateusz_W4",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      role: "Starosta roku",
    },
    upvotes: 142,
    replies: 56,
    views: 1890,
    createdAt: "15 min temu",
    isPinned: true,
    tags: ["Analiza", "Kolokwium", "Notatki"],
  },
  {
    id: "post-2",
    title:
      "Szukamy 2 osób do zespołu na Hackathon AI (Frontend React / Backend NestJS)",
    category: "Koła Naukowe i Projekty",
    author: {
      name: "Karolina_Dev",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      role: "KN Solvro",
    },
    upvotes: 89,
    replies: 23,
    views: 740,
    createdAt: "1 godz. temu",
    isPinned: false,
    tags: ["Hackathon", "React", "NestJS"],
  },
  {
    id: "post-3",
    title:
      "Praca na pół etatu na 2. roku Informatyki: Jak łączycie godziny z zajęciami?",
    category: "Kariera i Staże",
    author: {
      name: "Piotr_K",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      role: "Student",
    },
    upvotes: 215,
    replies: 94,
    views: 3100,
    createdAt: "3 godz. temu",
    isPinned: false,
    tags: ["Praca", "Staże", "Studia"],
  },
];
