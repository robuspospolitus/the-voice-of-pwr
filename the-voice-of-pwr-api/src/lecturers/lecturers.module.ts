import { Module } from '@nestjs/common';
import { LecturersService } from './lecturers.service';
import { LecturersController } from './lecturers.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [LecturersController],
  providers: [LecturersService],
  imports: [DatabaseModule],
})
export class LecturersModule {}
