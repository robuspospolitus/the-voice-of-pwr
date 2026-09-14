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
  password: z.string().min(6, "Hasło musi zawierać minimum 6 znaków"),
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
    //Tutaj logika do logowania jak cos
  }

  return (
    <Card className="w-full max-w-md mx-auto p-5 border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">
          The Voice of PWR
        </CardTitle>
        <CardDescription className="text-[16px]">
          Enter your email and password below to sign in!
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
              placeholder="Entry password"
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
            className="w-full py-5 cursor-pointer font-normal"
          >
            Zaloguj się
          </Button>
        </form>
        <CardFooter>
          <CardDescription className="pt-4">
            Don't have an account?
            <Link
              className="mx-1 text-neutral-500 hover:underline"
              href={"/signup"}
            >
              Sign up here
            </Link>
          </CardDescription>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
