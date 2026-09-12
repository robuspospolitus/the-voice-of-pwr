import { Module } from '@nestjs/common';
import { LecturerOpinionsService } from './lecturer_opinions.service';
import { LecturerOpinionsController } from './lecturer_opinions.controller';

@Module({
  controllers: [LecturerOpinionsController],
  providers: [LecturerOpinionsService],
})
export class LecturerOpinionsModule {}
