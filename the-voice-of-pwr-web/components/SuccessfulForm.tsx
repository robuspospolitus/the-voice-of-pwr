import { Button } from "./ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type SuccessfulFormProps = {
  header: string;
  body: string;
  successfulFunc: () => void;
};

export default function SuccessfulForm({
  successfulFunc,
  header,
  body,
}: SuccessfulFormProps) {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <CheckCircle2 className="h-7 w-7" />
      </div>

      <h2 className="text-2xl font-bold text-zinc-900">{header}</h2>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Button
          onClick={successfulFunc}
          className="inline-flex bg-prim h-9 items-center justify-center rounded-lg  px-4 text-sm font-medium text-white transition hover:bg-prim/90 hover:-translate-y-0.5"
        >
          {body}
        </Button>

        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900 hover:-translate-y-0.5"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}
