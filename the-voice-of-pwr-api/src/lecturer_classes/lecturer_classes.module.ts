import { Module } from '@nestjs/common';
import { LecturerClassesService } from './lecturer_classes.service';
import { LecturerClassesController } from './lecturer_classes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [LecturerClassesController],
  providers: [LecturerClassesService],
  imports: [DatabaseModule],
})
export class LecturerClassesModule {}
