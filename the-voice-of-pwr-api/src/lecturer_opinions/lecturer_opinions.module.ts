import { Module } from '@nestjs/common';
import { LecturerOpinionsService } from './lecturer_opinions.service';
import { LecturerOpinionsController } from './lecturer_opinions.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [LecturerOpinionsController],
  providers: [LecturerOpinionsService],
  imports: [DatabaseModule],
})
export class LecturerOpinionsModule {}
