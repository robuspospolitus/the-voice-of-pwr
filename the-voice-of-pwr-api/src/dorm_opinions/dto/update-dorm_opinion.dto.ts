import { PartialType } from '@nestjs/swagger';
import { CreateDormOpinionDto } from './create-dorm_opinion.dto';

export class UpdateDormOpinionDto extends PartialType(CreateDormOpinionDto) {}
