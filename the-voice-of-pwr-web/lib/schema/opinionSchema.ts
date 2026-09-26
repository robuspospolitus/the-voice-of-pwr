import * as z from "zod";
import { ALLOWED_GRADES } from "@/data/constants/grades";

export const opinionSchema = z.object({
  title: z.string().min(1, "Musisz wpisać tytuł opinii"),
  grade: z
    .string()
    .min(1, "Podaj ocenę")
    .refine(
      (val) => (ALLOWED_GRADES as readonly number[]).includes(Number(val)),
      {},
    ),
  description: z
    .string()
    .min(1, "Dodaj opis do swojej opinii!")
    .max(500, "Twoja wypowiedź jest za długa!"),
});

export type opinionFormValues = z.infer<typeof opinionSchema>;
