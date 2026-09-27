import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFieldOfStudyDto {
  @IsString({ message: 'Shortcut must be a string' })
  @IsNotEmpty({ message: 'Shortcut is required' })
  @ApiProperty({
    description: 'The shortcut of the field of study',
    example: 'INF',
  })
  shortcut!: string;

  @IsString({ message: 'Full name must be a string' })
  @IsNotEmpty({ message: 'Full name is required' })
  @ApiProperty({
    description: 'The full name of the field of study',
    example: 'Informatyka',
  })
  fullName!: string;

  @IsString({ message: 'Faculty shortcut must be a string' })
  @IsNotEmpty({ message: 'Faculty shortcut is required' })
  @ApiProperty({
    description: 'The shortcut of the associated faculty',
    example: 'WI',
  })
  facultyShortcut!: string;
}
