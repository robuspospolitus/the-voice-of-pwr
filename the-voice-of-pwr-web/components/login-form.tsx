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
  password: z.string().min(8, "Hasło musi zawierać minimum 8 znaków"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues) {
    console.log("Wartości: ", values);
    // Tutaj logika do logowania jak cos
  }

  return (
    <Card className="w-full max-w-md mx-auto p-5 border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-semibold my-2">
          The Voice of <span className="font-extrabold text-prim ">PWR</span>
        </CardTitle>
        <CardDescription className="text-[16px]">
          Wprowadż swój adres email i pasujące do niego hasło aby się zalogować!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          noValidate
          onSubmit={(e) => {
            handleSubmit(onSubmit)(e);
          }}
          className="space-y-4"
        >
          <div className="space-y-2 flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              id="email"
              type="email"
              placeholder="name@example.com"
              aria-invalid={!!errors.email}
              {...register("email")}
              required
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1 flex flex-col ">
            <label htmlFor="password" className="text-sm font-medium">
              Hasło <span className="text-red-500">*</span>
            </label>
            <Input
              className="border-0 outline-0 bg-neutral-200/80 py-5 text-start"
              id="password"
              type="password"
              placeholder="Wprowadź hasło"
              aria-invalid={!!errors.password}
              {...register("password")}
              required
            />

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-5 cursor-pointer font-normal bg-prim hover:bg-prim/80"
          >
            Zaloguj się
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <CardDescription className="pt-4">
          Nie masz jeszcze konta?
          <Link
            className="mx-1 text-prim hover:underline font-medium "
            href={"/signup"}
          >
            Zarejestruj się tutaj!
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
