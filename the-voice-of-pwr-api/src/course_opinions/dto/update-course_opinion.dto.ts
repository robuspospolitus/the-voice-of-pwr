import { PartialType } from '@nestjs/swagger';
import { CreateCourseOpinionDto } from './create-course_opinion.dto';

export class UpdateCourseOpinionDto extends PartialType(CreateCourseOpinionDto) {}
