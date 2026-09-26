import { notFound } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import BackLink from "@/components/layout/BackLink";
const modes = ["signin", "signup"] as const;
type AuthMode = (typeof modes)[number];
export default async function AuthView({
  params,
}: {
  params: Promise<{ mode: string }>;
}) {
  const { mode } = await params;
  if (!(modes as readonly string[]).includes(mode)) notFound();
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-8 bg-[#fcf9ff]">
      <AuthForm mode={mode as AuthMode} />
      <BackLink title="Wróć do Strony głównej" href="/" />
    </main>
  );
}
