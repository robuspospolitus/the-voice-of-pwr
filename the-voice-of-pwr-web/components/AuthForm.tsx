"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAccount, RegisterUser } from "@/lib/api/auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  RegisterFormValues,
  registerSchema,
  loginSchema,
} from "@/lib/schema/authFormSchema";

function errorText(message: string | string[]) {
  return Array.isArray(message) ? message.join(", ") : message;
}

interface AuthFormProps {
  mode: "signin" | "signup";
}

const formFields = [
  {
    id: "name",
    label: "Nazwa użytkownika",
    type: "text",
    placeholder: "Adam Nowak",
    signUpOnly: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "name@example.com",
  },
  {
    id: "password",
    label: "Hasło",
    type: "password",
    placeholder: "Wprowadź hasło",
  },
  {
    id: "confirmPassword",
    label: "Powtórz hasło",
    type: "password",
    placeholder: "Powtórz hasło",
    signUpOnly: true,
  },
];

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "signup";
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(isSignUp ? registerSchema : (loginSchema as any)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    setSubmitError(null);

    const result = isSignUp
      ? await RegisterUser({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      : await loginAccount({
          email: values.email,
          password: values.password,
        });

    if (!result.ok) {
      setSubmitError(errorText(result.message));
      return;
    }

    const session =
      "accessToken" in result
        ? result
        : await loginAccount({
            email: values.email,
            password: values.password,
          });

    if (!session.ok) {
      setSubmitError(errorText(session.message));
      return;
    }

    localStorage.setItem("accessToken", session.accessToken);
    document.cookie = `accessToken=${encodeURIComponent(session.accessToken)}; Path=/; SameSite=Lax`;
    router.push("/");
    router.refresh();
  };

  return (
    <Card className="w-full max-w-md mx-auto p-5 ring-0 lg:ring">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-semibold ">
          {isSignUp ? "Zarejestruj się" : "Zaloguj się"}
        </CardTitle>

        <CardDescription className="text-[16px]">
          {isSignUp
            ? "Wprowadź swoje dane, aby się zarejestrować!"
            : "Wprowadź adres email i hasło, aby się zalogować!"}
        </CardDescription>
        {submitError && (
          <p className="pt-3 text-sm text-red-500">{submitError}</p>
        )}
      </CardHeader>

      <CardContent>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {formFields.map((field) => {
            if (field.signUpOnly && !isSignUp) {
              return null;
            }

            return (
              <div key={field.id} className="flex flex-col">
                <label htmlFor={field.id} className="text-sm font-medium ">
                  {field.label} <span className="text-red-700">*</span>
                </label>

                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="border-0 bg-neutral-200/80 py-5"
                  {...register(field.id as keyof RegisterFormValues)}
                />

                {errors[field.id as keyof RegisterFormValues] && (
                  <p className="text-sm text-red-500 mt-1">
                    *
                    {
                      errors[field.id as keyof RegisterFormValues]
                        ?.message as string
                    }
                  </p>
                )}
              </div>
            );
          })}
          <Button type="submit" variant="form">
            {isSignUp ? "Zarejestruj się" : "Zaloguj się"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col bg-white">
        <CardDescription className="pt-4">
          {isSignUp ? "Masz już konto? " : "Nie masz jeszcze konta? "}

          <Link
            className="text-prim hover:underline font-medium"
            href={isSignUp ? "/signin" : "/signup"}
          >
            {isSignUp ? "Zaloguj się." : "Zarejestruj się!"}
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
