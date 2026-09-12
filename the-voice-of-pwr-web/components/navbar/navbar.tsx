import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#263A99]/10 bg-[#E6E5F0]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            Studia<span className="text-[#263A99] font-bold">Forum</span>
          </span>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-zinc-600">
            <a
              href="#feed"
              className="text-zinc-900 hover:text-[#263A99] transition-colors"
            >
              Dyskusje
            </a>
            <a
              href="#categories"
              className="hover:text-[#263A99] transition-colors"
            >
              Kategorie
            </a>
            <a href="#about" className="hover:text-[#263A99] transition-colors">
              Zasady
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex text-sm font-medium text-zinc-700 hover:text-[#263A99] hover:bg-[#97B4DE]/20"
          >
            Zaloguj się
          </Button>
          <Button className="bg-[#263A99] text-white hover:bg-[#263A99]/90 text-sm font-medium shadow-none h-9 px-4 rounded-md">
            Rejestracja
          </Button>
        </div>
      </div>
    </header>
  );
}
