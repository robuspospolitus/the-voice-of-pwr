import { Module } from '@nestjs/common';
import { DormsService } from './dorms.service';
import { DormsController } from './dorms.controller';

@Module({
  controllers: [DormsController],
  providers: [DormsService],
})
export class DormsModule {}
