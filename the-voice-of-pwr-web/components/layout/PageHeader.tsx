interface FormsHeaderProps {
  title: string;
  description: string;
}

export default function FormsHeader({ title, description }: FormsHeaderProps) {
  return (
    <section className="max-w-2xl space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h1>
      <p className="text-base leading-relaxed text-zinc-600">{description}</p>
    </section>
  );
}
