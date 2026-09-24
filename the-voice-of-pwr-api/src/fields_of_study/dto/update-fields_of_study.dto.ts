import { PartialType } from '@nestjs/swagger';
import { CreateFieldsOfStudyDto } from './create-fields_of_study.dto';

export class UpdateFieldsOfStudyDto extends PartialType(CreateFieldsOfStudyDto) {}