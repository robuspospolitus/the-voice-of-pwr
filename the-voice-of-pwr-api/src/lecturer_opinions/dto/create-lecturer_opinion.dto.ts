import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLecturerOpinionDto {

  @IsInt({ message: 'Lecturer ID must be an integer' })
  @IsNotEmpty({ message: 'Lecturer ID is required' })
  @ApiProperty({ description: 'The ID of the associated lecturer', example: 1 })
  lecturerId!: number;

  @IsNumber({}, { message: 'Star amount must be a number' })
  @IsNotEmpty({ message: 'Star amount is required' })
  @ApiProperty({
    description: 'The amount of stars of the opinion',
    example: 5,
  })
  stars!: number;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The description of the opinion post',
    example: 'Great lecturer!',
  })
  description?: string;
}
