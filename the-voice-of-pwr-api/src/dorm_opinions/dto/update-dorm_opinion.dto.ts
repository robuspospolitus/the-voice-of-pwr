import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateDormOpinionDto } from './create-dorm_opinion.dto';

export class UpdateDormOpinionDto extends PartialType(
  OmitType(CreateDormOpinionDto, ['dormShortcut'] as const),
) {}