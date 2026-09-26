import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateLecturerDto } from './create-lecturer.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateLecturerDto extends PartialType(CreateLecturerDto) {
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The name of the lecturer',
    example: 'Adam',
  })
  name?: string;

  @IsString({ message: 'Surname must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The surname of the lecturer',
    example: 'Nowak',
  })
  surname?: string;

  @IsEmail({}, { message: 'Mail must be a valid email address' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The email address of the lecturer',
    example: 'adam.nowak@example.com',
  })
  mail?: string;
}
