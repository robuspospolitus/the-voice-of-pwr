import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateLecturerOpinionDto } from './create-lecturer_opinion.dto';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateLecturerOpinionDto extends PartialType(
  CreateLecturerOpinionDto,
) {
  @IsInt({ message: 'User ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the associated user',
    example: 1,
  })
  userId?: number;

  @IsInt({ message: 'Lecturer ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the associated lecturer',
    example: 1,
  })
  lecturerId?: number;

  @IsNumber({}, { message: 'Star amount must be a number' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The amount of stars of the opinion',
    example: 5,
  })
  stars?: number;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The description of the opinion post',
    example: 'Great lecturer!',
  })
  description?: string;
}
