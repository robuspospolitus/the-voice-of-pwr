interface FormsHeaderProps {
  title: string;
  description: string;
}

export default function FormsHeader({ title, description }: FormsHeaderProps) {
  return (
    <div className="rounded-xl bg-prim p-6 text-white sm:px-8 ">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
        {description}
      </p>
    </div>
  );
}
