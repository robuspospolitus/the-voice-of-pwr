import { IsString } from 'class-validator';

export class CreateLecturerDto {
  @IsString()
  name!: string;

  @IsString()
  surname!: string;

  @IsString()
  mail!: string;
}