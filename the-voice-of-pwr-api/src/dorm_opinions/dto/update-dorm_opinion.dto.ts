import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateDormOpinionDto } from './create-dorm_opinion.dto';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDormOpinionDto extends PartialType(CreateDormOpinionDto) {
  @IsInt({ message: 'User ID must be an integer' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The ID of the associated user',
    example: 1,
  })
  userId?: number;

  @IsString({ message: 'Dorm shortcut must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The shortcut of the associated dorm',
    example: 'DS1',
  })
  dormShortcut?: string;

  @IsNumber({}, { message: 'Star amount must be a number' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The amount of stars of the opinion',
    example: 4,
  })
  stars?: number;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The description of the opinion post',
    example: 'Good conditions.',
  })
  description?: string;
}
