import { Module } from '@nestjs/common';
import { DormsService } from './dorms.service';
import { DormsController } from './dorms.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [DormsController],
  providers: [DormsService],
  imports: [DatabaseModule],
})
export class DormsModule {}
