import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center  px-6 text-zinc-900 space-y-4">
      <div className="w-full max-w-md  bg-white px-8 py-10 text-center ">
        <h1 className="mt-4 text-8xl font-bold tracking-tight text-prim/80">
          404
        </h1>
        <p className="mt-3 text-lg font-semibold">Nie znaleziono strony</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
          Ten adres nie istnieje albo został przeniesiony.
        </p>
      </div>
      <Link
        href="/"
        className="bg-prim text-white px-4 py-2 rounded-sm transition duration-200 hover:-translate-y-0.5 hover:bg-prim/90"
      >
        Wróć na stronę główną
      </Link>
    </main>
  );
}
