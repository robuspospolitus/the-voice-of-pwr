import { IsString, IsInt } from 'class-validator';

export class CreateDormDto {
  @IsString()
  shortcut!: string;

  @IsString()
  fullName!: string;

  @IsString()
  localization!: string;

  @IsInt()
  capacity!: number;
}