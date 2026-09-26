import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateLecturerClassDto } from './create-lecturer_class.dto';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateLecturerClassDto extends PartialType(
  CreateLecturerClassDto,
) {
  @IsInt({ message: 'Lecturer ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the associated lecturer',
    example: 1,
  })
  lecturerId?: number;

  @IsInt({ message: 'Course ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the associated course',
    example: 1,
  })
  courseId?: number;
}
