import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  @ApiProperty({
    description: 'User email address',
    example: 'jankowalski@email.com',
  })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @ApiProperty({
    description: 'User password',
    example: 'strongPassword123',
  })
  password!: string;
}