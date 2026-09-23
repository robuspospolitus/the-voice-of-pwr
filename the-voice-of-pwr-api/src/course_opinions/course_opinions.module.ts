import { Module } from '@nestjs/common';
import { CourseOpinionsService } from './course_opinions.service';
import { CourseOpinionsController } from './course_opinions.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CourseOpinionsController],
  providers: [CourseOpinionsService],
  imports: [DatabaseModule],
})
export class CourseOpinionsModule {}
