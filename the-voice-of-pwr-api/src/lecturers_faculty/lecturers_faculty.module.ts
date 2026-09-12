import { Module } from '@nestjs/common';
import { LecturersFacultyService } from './lecturers_faculty.service';
import { LecturersFacultyController } from './lecturers_faculty.controller';

@Module({
  controllers: [LecturersFacultyController],
  providers: [LecturersFacultyService],
})
export class LecturersFacultyModule {}
