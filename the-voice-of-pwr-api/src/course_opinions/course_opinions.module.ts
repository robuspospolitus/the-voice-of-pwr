import { Module } from '@nestjs/common';
import { CourseOpinionsService } from './course_opinions.service';
import { CourseOpinionsController } from './course_opinions.controller';

@Module({
  controllers: [CourseOpinionsController],
  providers: [CourseOpinionsService],
})
export class CourseOpinionsModule {}
