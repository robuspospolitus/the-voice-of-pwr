import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { opinionSchema, opinionFormValues } from "@/lib/schema/opinionSchema";
import FormsHeader from "./layout/FormsHeader";
import BackLink from "./layout/BackLink";

interface InputField {
  label: string;
  name: keyof opinionFormValues;
  placeholder: string;
  multiline: boolean;
}

const inputFields: InputField[] = [
  {
    label: "Tytuł",
    name: "title",
    placeholder: "Wpisz tytuł...",
    multiline: false,
  },
  {
    label: "Ocena z kursu",
    name: "grade",
    placeholder: "Podaj swoją ocenę",
    multiline: false,
  },
  {
    label: "Treść",
    name: "description",
    placeholder: "Wpisz treść opinii",
    multiline: true,
  },
];

interface OpinionFormProps {
  onSuccess?: () => void;
}

export default function OpinionForm({ onSuccess }: OpinionFormProps) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<opinionFormValues>({
    resolver: zodResolver(opinionSchema),
    defaultValues: { title: "", grade: "", description: "" },
  });

  const onSubmit = (values: opinionFormValues) => {
    console.log(new Date().toLocaleDateString("pl-PL"));
    reset();
    onSuccess?.();
  };

  const description = watch("description");
  const isTextareaFull: boolean = description.length === 500;
  return (
    <main className="w-full max-w-3xl space-y-4">
      <FormsHeader
        title="Stworz opinię"
        description="Dodaj swoją opinię i podziel się z nią z innymi studentami"
      />
      <Card className="w-full p-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-zinc-900">
            Szczegóły opinii
          </CardTitle>
          <CardDescription>Uzupełnij wszystkie kolumny</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-2"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputFields.map((el) => (
              <div key={el.name} className="">
                <div className="flex justify-between items-center px-2">
                  <label className="my-1" htmlFor={el.name}>
                    {el.label}
                  </label>
                  {el.multiline && (
                    <span
                      className={`${isTextareaFull ? "text-destructive" : ""} text-zinc-400 text-xs`}
                    >
                      {description.length}/500
                    </span>
                  )}
                </div>

                {el.multiline ? (
                  <div className="">
                    <Textarea
                      maxLength={600}
                      variant="opinionForm"
                      id={el.name}
                      rows={6}
                      aria-invalid={!!errors[el.name]}
                      {...register(el.name)}
                      placeholder={el.placeholder}
                      className="my-1"
                    />
                  </div>
                ) : (
                  <Input
                    variant="opinionForm"
                    id={el.name}
                    type="text"
                    aria-invalid={!!errors[el.name]}
                    placeholder={el.placeholder}
                    {...register(el.name)}
                    className="my-1 text-sm"
                  />
                )}
                {errors[el.name] && (
                  <span className="text-red-500 text-sm">
                    {errors[el.name]?.message}
                  </span>
                )}
              </div>
            ))}
            <Button variant="form" type="submit">
              Zapisz opinę
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
