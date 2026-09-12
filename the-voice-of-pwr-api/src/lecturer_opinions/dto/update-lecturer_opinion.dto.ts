import { PartialType } from '@nestjs/swagger';
import { CreateLecturerOpinionDto } from './create-lecturer_opinion.dto';

export class UpdateLecturerOpinionDto extends PartialType(CreateLecturerOpinionDto) {}
