import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDormOpinionDto {

  @IsString({ message: 'Dorm shortcut must be a string' })
  @IsNotEmpty({ message: 'Dorm shortcut is required' })
  @ApiProperty({
    description: 'The shortcut of the associated dorm',
    example: 'DS1',
  })
  dormShortcut!: string;

  @IsNumber({}, { message: 'Star amount must be a number' })
  @IsNotEmpty({ message: 'Star amount is required' })
  @ApiProperty({
    description: 'The amount of stars of the opinion',
    example: 4,
  })
  stars!: number;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The description of the opinion post',
    example: 'Good conditions.',
  })
  description?: string;
}
