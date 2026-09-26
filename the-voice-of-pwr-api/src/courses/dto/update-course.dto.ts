import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString({ message: 'Full name must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The full name of the course',
    example: 'Programowanie Obiektowe',
  })
  fullName?: string;

  @IsString({ message: 'Field of study shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the associated field of study',
    example: 'INF',
  })
  fieldOfStudyShortcut?: string;

  @IsInt({ message: 'Coordinator ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the course coordinator',
    example: 1,
  })
  coordinatorId?: number;

  @IsString({ message: 'Semester must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The semester of the course',
    example: 'Zimowy 2023',
  })
  semester?: string;
}
