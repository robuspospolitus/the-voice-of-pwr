import BackLink from "@/components/layout/BackLink";

export default function notFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen space-y-2">
      <h1 className="text-xl">Nie znaleziono wykładowcy</h1>
      <p>Nie posiadamy takiego wykładowcy w naszej bazie danych</p>
      <BackLink href="/lecturers" title="Wróć do listy" />
    </main>
  );
}
