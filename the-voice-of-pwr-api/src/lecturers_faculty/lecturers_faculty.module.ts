import { Module } from '@nestjs/common';
import { LecturersFacultyService } from './lecturers_faculty.service';
import { LecturersFacultyController } from './lecturers_faculty.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [LecturersFacultyController],
  providers: [LecturersFacultyService],
  imports: [DatabaseModule],
})
export class LecturersFacultyModule {}
