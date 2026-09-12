import { PartialType } from '@nestjs/swagger';
import { CreateLecturerClassDto } from './create-lecturer_class.dto';

export class UpdateLecturerClassDto extends PartialType(CreateLecturerClassDto) {}
