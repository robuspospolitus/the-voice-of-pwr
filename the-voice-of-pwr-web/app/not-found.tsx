export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-prim/80 text-8xl font-bold">404</h1>
      <p className="text-black font-semibold text-2xl">Nie znalezione strony</p>
      <p className="text-muted-foreground">
        Ten adres nie istnieje albo został przeniesiony
      </p>
      <a
        className="p-2 text-sm bg-prim text-white rounded-sm hover:bg-prim/90 transition hover:-translate-y-0.5 duration-200"
        href="/"
      >
        Wróć do strony glownej
      </a>
    </main>
  );
}
