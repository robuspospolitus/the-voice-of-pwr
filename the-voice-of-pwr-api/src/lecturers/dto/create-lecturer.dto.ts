import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLecturerDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @ApiProperty({ description: 'The name of the lecturer', example: 'Adam' })
  name!: string;

  @IsString({ message: 'Surname must be a string' })
  @IsNotEmpty({ message: 'Surname is required' })
  @ApiProperty({ description: 'The surname of the lecturer', example: 'Nowak' })
  surname!: string;

  @IsEmail({}, { message: 'Mail must be a valid email address' })
  @IsNotEmpty({ message: 'Mail is required' })
  @ApiProperty({
    description: 'The email address of the lecturer',
    example: 'adam.nowak@example.com',
  })
  mail!: string;
}
