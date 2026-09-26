import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateFacultyDto } from './create-faculty.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
  @IsString({ message: 'Shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the faculty',
    example: 'WI',
  })
  shortcut?: string;

  @IsString({ message: 'Full name must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The full name of the faculty',
    example: 'Wydział Informatyki',
  })
  fullName?: string;
}
