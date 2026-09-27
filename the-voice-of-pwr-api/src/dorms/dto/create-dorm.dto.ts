import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDormDto {
  @IsString({ message: 'Shortcut must be a string' })
  @IsNotEmpty({ message: 'Shortcut is required' })
  @ApiProperty({ description: 'The shortcut of the dorm', example: 'DS1' })
  shortcut!: string;

  @IsString({ message: 'Full name must be a string' })
  @IsNotEmpty({ message: 'Full name is required' })
  @ApiProperty({
    description: 'The full name of the dorm',
    example: 'Akademik Olimp',
  })
  fullName!: string;

  @IsString({ message: 'Localization must be a string' })
  @IsNotEmpty({ message: 'Localization is required' })
  @ApiProperty({
    description: 'The location of the dorm',
    example: 'ul. Akademicka 1',
  })
  localization!: string;

  @IsInt({ message: 'Capacity must be an integer' })
  @IsNotEmpty({ message: 'Capacity is required' })
  @ApiProperty({ description: 'The capacity of the dorm', example: 500 })
  capacity!: number;
}
