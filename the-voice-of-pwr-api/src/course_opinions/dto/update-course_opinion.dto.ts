import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCourseOpinionDto } from './create-course_opinion.dto';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateCourseOpinionDto extends PartialType(
  CreateCourseOpinionDto,
) {
  @IsInt({ message: 'User ID must be an integer' })
  @IsOptional()
  @ApiProperty({ description: 'The ID of the associated user', example: 1 })
  userId?: number;

  @IsInt({ message: 'Course ID must be an integer' })
  @IsOptional()
  @ApiProperty({
    description: 'The ID of the associated course',
    example: 1,
  })
  courseId?: number;

  @IsNumber({}, { message: 'Star amount must be a number' })
  @IsOptional()
  @ApiProperty({
    description: 'The amount of stars of the opinion',
    example: 34,
  })
  stars?: number;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The description of the opinion post',
    example: 'I recommend this course!',
  })
  description?: string;
}
