import AuthForm from "@/components/AuthForm";

export default function Signup() {
  return (
    <main className="overflow-x-hidden h-screen flex justify-center items-center">
      <AuthForm mode="signup" />
    </main>
  );
}
