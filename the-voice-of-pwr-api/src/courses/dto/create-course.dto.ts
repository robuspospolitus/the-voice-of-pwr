import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  fullName!: string;

  @IsString()
  fieldOfStudyShortcut!: string;

  @IsOptional()
  @IsInt()
  coordinatorId?: number;

  @IsOptional()
  @IsString()
  semester?: string;
}