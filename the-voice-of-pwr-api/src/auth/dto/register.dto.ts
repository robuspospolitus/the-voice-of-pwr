import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  @MaxLength(100, { message: 'Name must be at most 100 characters long' })
  @ApiProperty({ description: 'User full name', example: 'Jan Kowalski' })
  name!: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'User email address',
    example: 'jankowalski@email.com',
  })
  email!: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(72, { message: 'Password must be at most 72 characters long' })
  @ApiProperty({ description: 'User password', example: 'strongPassword123' })
  password!: string;
}