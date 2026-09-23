import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Podaj poprawny adres email"),
  password: z.string().min(8, "Minimum 8 znaków"),
});

export const registerSchema = loginSchema
  .extend({
    name: z.string().min(1, "Podaj nazwę użytkownika"),
    confirmPassword: z.string().min(1, "Potwierdź hasło"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie są identyczne",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type AuthFormValues = LoginFormValues | RegisterFormValues;
