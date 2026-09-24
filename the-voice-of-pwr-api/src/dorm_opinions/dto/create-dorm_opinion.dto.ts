import { IsString, IsNumber, IsOptional, Min, Max, IsIn } from 'class-validator';

export class CreateDormOpinionDto {
  @IsString()
  dormShortcut!: string;

  @IsNumber()
  @IsIn([2, 2.5, 3, 3.5, 4, 4.5, 5])
  rating!: number;

  @IsOptional()
  @IsString()
  description?: string;
}