import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const opinionSchema = z.object({
  title: z.string().min(1, "Musisz wpisać tytuł opinii"),
  grade: z.string().min(1, "Podaj swoją ocenę!"),
  description: z
    .string()
    .min(1, "Dodaj opis do swojej opinii!")
    .max(300, "Twoja wypowiedź jest za długa!"),
});

type opinionFormValues = z.infer<typeof opinionSchema>;

interface InputField {
  label: string;
  name: keyof opinionFormValues;
  placeholder: string;
}
const inputFields: InputField[] = [
  {
    label: "Tytuł",
    name: "title",
    placeholder: "Wpisz tytuł...",
  },
  {
    label: "Ocena",
    name: "grade",
    placeholder: "Podaj swoją ocenę",
  },
  {
    label: "Treść",
    name: "description",
    placeholder: "Wpisz treść opinii",
  },
];

export default function OpinionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<opinionFormValues>({
    resolver: zodResolver(opinionSchema),
    defaultValues: { title: "", grade: "", description: "" },
  });

  const onSubmit = (values: opinionFormValues) => {
    console.log("Val: ", values);
    reset();
  };
  return (
    <main className="h-screen">
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map((el) => (
              <div key={el.name} className="">
                <label htmlFor={el.name}>{el.label}</label>
                <input
                  id={el.name}
                  type="text"
                  placeholder={el.placeholder}
                  {...register(el.name)}
                />
                {errors[el.name] && (
                  <span className="text-red-500 text-sm">
                    {errors[el.name]?.message}
                  </span>
                )}
              </div>
            ))}
            <Button type="submit">Zapisz opinę</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
