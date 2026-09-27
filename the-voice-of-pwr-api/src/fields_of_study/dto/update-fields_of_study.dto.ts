import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateFieldOfStudyDto } from './create-fields_of_study.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFieldOfStudyDto extends PartialType(CreateFieldOfStudyDto) {
  @IsString({ message: 'Shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the field of study',
    example: 'INF',
  })
  shortcut?: string;

  @IsString({ message: 'Full name must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The full name of the field of study',
    example: 'Informatyka',
  })
  fullName?: string;

  @IsString({ message: 'Faculty shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the associated faculty',
    example: 'WI',
  })
  facultyShortcut?: string;
}
