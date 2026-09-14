import LecturerCard from "@/components/lecturer-card";
import { CardDescription } from "@/components/ui/card";

const exampleCard = [
  {
    id: "1",
    username: "Qnsay0",
    date: "2010-06-07",
    course: "Miernictwo 2",
    title: "daj pan spokój",
    description:
      "Odpuściłem sobie ten kurs. Spędzałem wiele godzin na pisaniu sprawozdań i nie zaliczyła mi żadnego. Niby mówi co jest źle, ale robi to bez przekonania, jakby sama dobrze nie wiedziała o co chodzi. Na zajęciach nie nauczyłem się kompletnie niczego i stwierdziłem, że nie warto tracić czasu na spotkania z nią na konsultacjach. Uciekać do Świerczyńskiego (ambitniejsi) albo Zachariasiewicz-Woźniak (leniwi).",
    grade: "2,5",
  },
];

export default function Lecturer() {
  return (
    <main>
      {exampleCard.map((card, key) => (
        <LecturerCard
          key={key}
          id={card.id}
          username={card.username}
          date={card.date}
          course={card.course}
          title={card.title}
          description={card.description}
          grade={card.grade}
        />
      ))}
    </main>
  );
}
