import { IsInt, IsString } from 'class-validator';

export class CreateLecturersFacultyDto {
  @IsInt()
  lecturerId!: number;

  @IsString()
  facultyShortcut!: string;
}