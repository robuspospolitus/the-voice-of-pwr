import { IsInt, IsNumber, IsOptional, IsString, IsIn } from 'class-validator';

export class CreateLecturerOpinionDto {
  @IsInt()
  lecturerId!: number;

  @IsNumber()
  @IsIn([2, 2.5, 3, 3.5, 4, 4.5, 5])
  rating!: number;

  @IsOptional()
  @IsString()
  description?: string;
}
