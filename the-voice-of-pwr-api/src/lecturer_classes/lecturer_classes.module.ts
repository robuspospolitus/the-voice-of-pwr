import { Module } from '@nestjs/common';
import { LecturerClassesService } from './lecturer_classes.service';
import { LecturerClassesController } from './lecturer_classes.controller';

@Module({
  controllers: [LecturerClassesController],
  providers: [LecturerClassesService],
})
export class LecturerClassesModule {}
