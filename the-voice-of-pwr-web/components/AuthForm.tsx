"use client";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const loginSchema = z.object({
  email: z.string().email("Podaj poprawny adres email"),
  password: z.string().min(8, "Minimum 8 znaków"),
});

const registerSchema = loginSchema
  .extend({
    name: z.string().min(1, "Podaj nazwę użytkownika"),
    confirmPassword: z.string().min(1, "Potwierdź hasło"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie są identyczne",
    path: ["confirmPassword"],
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;
type AuthFormValues = LoginFormValues | RegisterFormValues;

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(isSignUp ? registerSchema : (loginSchema as any)),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };

  return (
    <Card variant="authForms">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-semibold ">
          The Voice of PWR
        </CardTitle>
        <CardDescription className="text-[16px]">
          {isSignUp
            ? "Wprowadź swoje dane, aby się zarejestrować!"
            : "Wprowadź adres email i hasło, aby się zalogować!"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {formFields.map((field) => {
            if (field.signUpOnly && !isSignUp) return null;
            return (
              <div key={field.id} className="flex flex-col">
                <label htmlFor={field.id} className="text-sm font-medium mb-1">
                  {field.label} <span className="text-red-700">*</span>
                </label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  variant="authForms"
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
          <Button type="submit" variant="forms">
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
