import { IsString } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  shortcut!: string;

  @IsString()
  fullName!: string;
}