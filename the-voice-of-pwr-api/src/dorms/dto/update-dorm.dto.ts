import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateDormDto } from './create-dorm.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateDormDto extends PartialType(CreateDormDto) {
  @IsString({ message: 'Shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the dorm',
    example: 'DS1',
  })
  shortcut?: string;

  @IsString({ message: 'Full name must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The full name of the dorm',
    example: 'Akademik Olimp',
  })
  fullName?: string;

  @IsString({ message: 'Localization must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The location of the dorm',
    example: 'ul. Akademicka 1',
  })
  localization?: string;

  @IsInt({ message: 'Capacity must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The capacity of the dorm',
    example: 500,
  })
  capacity?: number;
}
