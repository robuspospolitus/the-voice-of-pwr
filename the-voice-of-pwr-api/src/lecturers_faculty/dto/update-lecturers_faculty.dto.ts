import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateLecturersFacultyDto } from './create-lecturers_faculty.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateLecturersFacultyDto extends PartialType(
  CreateLecturersFacultyDto,
) {
  @IsInt({ message: 'Lecturer ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the associated lecturer',
    example: 1,
  })
  lecturerId?: number;

  @IsString({ message: 'Faculty shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the associated faculty',
    example: 'WI',
  })
  facultyShortcut?: string;
}
