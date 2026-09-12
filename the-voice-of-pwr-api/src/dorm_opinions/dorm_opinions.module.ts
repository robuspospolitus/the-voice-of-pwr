import { Module } from '@nestjs/common';
import { DormOpinionsService } from './dorm_opinions.service';
import { DormOpinionsController } from './dorm_opinions.controller';

@Module({
  controllers: [DormOpinionsController],
  providers: [DormOpinionsService],
})
export class DormOpinionsModule {}
