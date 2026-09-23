import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFacultyDto {
  @IsString({ message: 'Shortcut must be a string' })
  @IsNotEmpty({ message: 'Shortcut is required' })
  @ApiProperty({ description: 'The shortcut of the faculty', example: 'WI' })
  shortcut!: string;

  @IsString({ message: 'Full name must be a string' })
  @IsNotEmpty({ message: 'Full name is required' })
  @ApiProperty({
    description: 'The full name of the faculty',
    example: 'Wydział Informatyki',
  })
  fullName!: string;
}
