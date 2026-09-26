import type { LecturerDetails } from "@/lib/types/lecturer";

export function opinionLabel(count: number) {
  if (count === 1) return "opinia";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "opinie";
  }
  return "opinii";
}

export function averageGrade(lecturer: LecturerDetails) {
  const grades = lecturer.opinions?.map((opinion) => opinion.grade) ?? [];
  if (grades.length === 0) return null;
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function gradeString(average: number) {
  return average.toFixed(1).replace(".", ",");
}

export function gradeColor(average: number) {
  if (average < 3) return "bg-red-600";
  if (average < 4.5) return "bg-yellow-600";
  return "bg-green-600";
}
