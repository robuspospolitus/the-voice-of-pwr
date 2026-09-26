import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateLecturerClassDto {
  @IsInt({ message: 'Lecturer ID must be an integer' })
  @IsNotEmpty({ message: 'Lecturer ID is required' })
  @ApiProperty({ description: 'The ID of the associated lecturer', example: 1 })
  lecturerId!: number;

  @IsInt({ message: 'Course ID must be an integer' })
  @IsNotEmpty({ message: 'Course ID is required' })
  @ApiProperty({ description: 'The ID of the associated course', example: 1 })
  courseId!: number;
}
