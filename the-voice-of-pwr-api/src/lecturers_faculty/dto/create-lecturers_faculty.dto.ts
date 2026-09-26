import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLecturersFacultyDto {
  @IsInt({ message: 'Lecturer ID must be an integer' })
  @IsNotEmpty({ message: 'Lecturer ID is required' })
  @ApiProperty({ description: 'The ID of the associated lecturer', example: 1 })
  lecturerId!: number;

  @IsString({ message: 'Faculty shortcut must be a string' })
  @IsNotEmpty({ message: 'Faculty shortcut is required' })
  @ApiProperty({
    description: 'The shortcut of the associated faculty',
    example: 'WI',
  })
  facultyShortcut!: string;
}
