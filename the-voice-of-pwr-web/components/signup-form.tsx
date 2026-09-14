"use client";
import * as z from "zod";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
export const registerSchema = z
  .object({
    name: z.string().min(1, "Podaj swoje imię"),
    email: z
      .string()
      .min(1, "Podaj adres e-mail")
      .email("Podaj poprawny adres e-mail"),
    password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
    confirmPassword: z.string().min(1, "Potwierdź hasło"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie są identyczne",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof registerSchema>;

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
    // LOGIKA LOGOWANIA
    // try {
    //   console.log("Dane poprawne, wysłano:", values);
    //   router.push("/login");
    // } catch (error) {
    //   console.error("Blad rejestracji", error);
    // }

    console.log(values);
  };

  return (
    <Card className="max-w-md mx-auto p-2 md:p-5 w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-semibold my-2">
          The Voice of <span className="font-extrabold text-prim">PWR</span>
        </CardTitle>
        <CardDescription className="text-[16px]">
          Wprowadź swoje imię, nazwisko, adres emial i hasło aby się
          zarejstrować!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          noValidate
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2 flex flex-col">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              id="name"
              type="name"
              placeholder="Adam Nowak"
              aria-invalid={!!errors.name}
              {...register("name")}
              required
            />
            {errors.name && (
              <p className="text-sm text-red-500">
                {"* " + errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2 flex flex-col ">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              required
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {"* " + errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2 flex flex-col">
            <label htmlFor="password">
              Hasło <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              required
              id="password"
              type="password"
              placeholder="Wprowadź hasło"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {"* " + errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-2 flex flex-col ">
            <label htmlFor="confirmPassword">
              Powtórz hasło <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              required
              id="confirmPassword"
              type="password"
              placeholder="Powtórz hasło"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {"* " + errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full py-5 cursor-pointer font-normal bg-prim hover:bg-prim/80"
          >
            Zarejestruj się
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col bg-white">
        <CardDescription className="pt-2">
          Masz już konto?
          <Link
            className="mx-1 text-prim font-medium hover:underline"
            href={"/login"}
          >
            Zaloguj się tutaj.
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
