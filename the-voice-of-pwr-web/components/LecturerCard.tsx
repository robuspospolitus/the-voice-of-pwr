import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface LecturerCardProps {
  id: string;
  username: string;
  date: string;
  course: string;
  title: string;
  description: string;
  grade: string;
}

export default function LecturerCard(props: LecturerCardProps) {
  return (
    <Card className=" max-w-4xl mx-auto ring-3 p-3">
      <CardHeader className="flex flex-row justify-between ">
        <div className="text-xs">
          <h1 className="text-sm font-semibold tracking-wide">
            {props.username}
          </h1>
          <div className="flex flex-col gap-1 ">
            <h1>
              Publikacja: <span className=" font-medium">{props.date}</span>
            </h1>
            <h1>
              Kurs:
              <span className="ml-1 py-0.5 px-1 bg-prim/20 rounded-2xl font-medium">
                {props.course}
              </span>
            </h1>
          </div>
        </div>
        <div className="text-end">
          <h1 className="flex flex-col-reverse">
            Ocena użytkownika
            <span className="text-4xl font-semibold">{props.grade}</span>
          </h1>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl ">{props.title}</CardTitle>
        <CardDescription className="text-[15px] text-black font-normal my-3">
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
