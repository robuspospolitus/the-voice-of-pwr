import { Module } from '@nestjs/common';
import { FieldsOfStudyService } from './fields_of_study.service';
import { FieldsOfStudyController } from './fields_of_study.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FieldsOfStudyController],
  providers: [FieldsOfStudyService],
  imports: [DatabaseModule],
})
export class FieldsOfStudyModule {}
