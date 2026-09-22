import { Module } from '@nestjs/common';
import { LecturerOpinionsService } from './lecturer_opinions.service';
import { LecturerOpinionsController } from './lecturer_opinions.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LecturerOpinionsController],
  providers: [LecturerOpinionsService],
})
export class LecturerOpinionsModule {}
