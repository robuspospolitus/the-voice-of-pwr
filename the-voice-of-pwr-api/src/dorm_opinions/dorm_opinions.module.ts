import { Module } from '@nestjs/common';
import { DormOpinionsService } from './dorm_opinions.service';
import { DormOpinionsController } from './dorm_opinions.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [DormOpinionsController],
  providers: [DormOpinionsService],
  imports: [DatabaseModule],
})
export class DormOpinionsModule {}
