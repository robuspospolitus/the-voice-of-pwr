import AuthForm from "@/components/AuthForm";

export default async function AuthMode({
  params,
}: {
  params: Promise<{ mode: "signin" | "signup" }>;
}) {
  const { mode } = await params;
  return (
    <main className="h-screen flex justify-center items-center bg-neutral-300/10">
      <AuthForm mode={mode} />
    </main>
  );
}
