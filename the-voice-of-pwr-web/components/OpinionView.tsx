import { LecturerDetails, LecturerOpinion } from "@/lib/types/lecturer";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { gradeColor, gradeString } from "./LecturerPreview";
export default function OpinionView({ opinion }: { opinion: LecturerOpinion }) {
  const grade = opinion.grade;
  const initials = opinion.user?.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <Card className="border-l-4 border-prim p-6 transition duration-200 hover:-translate-y-0.5 hover:border-red">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-start gap-2">
          <div className="flex flex-col">
            <CardTitle className="leading-tight">
              {opinion.user?.name}
            </CardTitle>
            <p className="text-xs leading-tight text-muted-foreground">
              Data publikacji:{" "}
              {new Date(opinion.date).toLocaleDateString("pl-PL")}
            </p>
          </div>
        </div>

        <div className="text-right flex flex-col items-end space-y-1">
          <p
            className={`text-xl font-semibold w-fit tabular-nums tracking-tight text-white  p-2 rounded-xl  ${grade === null ? "text-prim" : gradeColor(grade)}`}
          >
            {gradeString(grade)}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <CardTitle className="text-xl">{opinion.title}</CardTitle>
        <CardDescription>{opinion.description}</CardDescription>
      </div>
    </Card>
  );
}
