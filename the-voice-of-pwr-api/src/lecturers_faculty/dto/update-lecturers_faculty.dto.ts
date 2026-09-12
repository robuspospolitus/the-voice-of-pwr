import { PartialType } from '@nestjs/swagger';
import { CreateLecturersFacultyDto } from './create-lecturers_faculty.dto';

export class UpdateLecturersFacultyDto extends PartialType(CreateLecturersFacultyDto) {}
