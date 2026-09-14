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
    try {
      console.log("Dane poprawne, wysłano:", values);
      router.push("/login");
    } catch (error) {
      console.error("Blad rejestracji", error);
    }

    console.log(values);
  };

  return (
    <Card className="max-w-md mx-auto p-5 w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">
          The Voice of PWR
        </CardTitle>
        <CardDescription className="text-[16px]">
          Entry username, email and password below to signUp!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          noValidate
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2 flex flex-col gap-1">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              id="name"
              type="name"
              placeholder="John Eddison"
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

          <div className="space-y-2 flex flex-col gap-1">
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

          <div className="space-y-2 flex flex-col gap-1">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              required
              id="password"
              type="password"
              placeholder="Entry password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {"* " + errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-2 flex flex-col gap-1">
            <label htmlFor="confirmPassword">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              required
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
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
            className="w-full py-5 cursor-pointer font-normal"
          >
            Zarejestruj sie
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <CardDescription>
          Don't have an account?
          <Link
            className="mx-1 text-neutral-500 hover:underline"
            href={"/login"}
          >
            Sign in here
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
