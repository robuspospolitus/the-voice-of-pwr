import { IsString } from 'class-validator';

export class CreateFieldsOfStudyDto {
  @IsString()
  shortcut!: string;

  @IsString()
  fullName!: string;

  @IsString()
  facultyShortcut!: string;
}