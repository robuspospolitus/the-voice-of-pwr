import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FacultiesController],
  providers: [FacultiesService],
  imports: [DatabaseModule],
})
export class FacultiesModule {}
