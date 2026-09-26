import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { opinionSchema, opinionFormValues } from "@/lib/schema/opinionSchema";
import PageHeader from "../../layout/PageHeader";
import GradeBadge from "./GradeBadge";
import { ALLOWED_GRADES } from "@/data/constants/grades";
import type { LecturerOpinion } from "@/lib/types/lecturer";
import { Send } from "lucide-react";
import { useState } from "react";
import SuccessfulForm from "@/components/SuccessfulForm";
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
  lecturerId: string;
  onAdd: (opinion: LecturerOpinion) => void;
  onSuccess?: () => void;
}

export default function OpinionForm({ lecturerId, onAdd }: OpinionFormProps) {
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

  const onSubmit = async (values: opinionFormValues) => {
    onAdd({
      id: crypto.randomUUID(),
      userId: 0,
      lecturerId,
      grade: Number(values.grade),
      title: values.title,
      description: values.description,
      user: { name: "" },
      date: new Date().toISOString().slice(0, 10),
    });
    reset();
    setIsFormSuccessful(true);
  };

  const title = watch("title");
  const grade = watch("grade");
  const description = watch("description");
  const isTextareaFull: boolean = description.length === 500;
  const [isFormSuccessful, setIsFormSuccessful] = useState(false);
  const gradeValue = Number(grade.replace(",", "."));
  const previewGrade = (ALLOWED_GRADES as readonly number[]).includes(
    gradeValue,
  )
    ? gradeValue
    : null;
  return (
    <div className="w-full space-y-8 ">
      <section className="mb-8 overflow-hidden rounded-2xl border border-[#263A99]/10 bg-white shadow-sm">
        <div className="rounded-t-2xl bg-[#263A99] px-6 py-7 text-white sm:px-8">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Utwórz opinię
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Podziel się swoją opinią z innymi studentami
          </p>
        </div>
      </section>
      {isFormSuccessful ? (
        <SuccessfulForm
          header="Opinia została dodana"
          body="Dodaj kolejną opinię"
          successfulFunc={() => setIsFormSuccessful(false)}
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <form
              className="space-y-6 rounded-2xl border border-[#263A99]/10 bg-white p-5 shadow-sm sm:p-7"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <h2 className="text-lg font-bold text-zinc-900">
                  Szczegóły opinii
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Uzupełnij wszystkie pola.
                </p>
              </div>

              <div className="space-y-5">
                {inputFields.map((el) => (
                  <div key={el.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <label
                        className="text-sm font-semibold text-zinc-800"
                        htmlFor={el.name}
                      >
                        {el.label}
                      </label>
                      {el.multiline && (
                        <span
                          className={`text-xs ${isTextareaFull ? "text-destructive" : "text-zinc-400"}`}
                        >
                          {description.length}/500
                        </span>
                      )}
                    </div>

                    {el.multiline ? (
                      <Textarea
                        maxLength={500}
                        variant="opinionForm"
                        id={el.name}
                        rows={6}
                        aria-invalid={!!errors[el.name]}
                        {...register(el.name)}
                        placeholder={el.placeholder}
                      />
                    ) : (
                      <Input
                        variant="opinionForm"
                        id={el.name}
                        type="text"
                        aria-invalid={!!errors[el.name]}
                        placeholder={el.placeholder}
                        {...register(el.name)}
                        className="text-sm"
                      />
                    )}

                    {errors[el.name] && (
                      <span className="mt-1 block text-sm text-red-500">
                        {errors[el.name]?.message}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex">
                <Button
                  type="submit"
                  className="bg-[#263A99] ml-auto text-white hover:bg-[#263A99]/90 font-medium p-4 cursor-pointer transition duration-200 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Opublikuj odpowiedź
                </Button>
              </div>
            </form>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-[#263A99]/10 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-900">Podgląd</h3>

              <p className="mt-1 text-xs text-zinc-500">
                Tak będzie wyglądać Twoja opinia.
              </p>

              <div className="mt-4 flex gap-4 rounded-xl border border-zinc-100 bg-[#F8F9FC] p-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-zinc-900">Ty</span>

                    <span className="text-zinc-400">•</span>

                    <span className="text-zinc-500">
                      {new Date().toLocaleDateString("pl-PL")}
                    </span>
                  </div>
                  <h3 className="mt-3 break-words text-base font-semibold leading-tight text-zinc-900">
                    {title || "Tutaj pojawi się tytuł opinii"}
                  </h3>
                  <p className="mt-2 break-words text-sm leading-relaxed text-zinc-600">
                    {description || "Tutaj pojawi się treść Twojej opinii."}
                  </p>
                </div>

                <GradeBadge average={previewGrade} />
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
