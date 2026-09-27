import AuthForm from "@/components/AuthForm";

export default function Login() {
  return (
    <main className="h-screen flex justify-center items-center bg-neutral-300/10">
      <AuthForm mode="signin" />
    </main>
  );
}
