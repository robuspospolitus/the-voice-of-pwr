import { Module } from '@nestjs/common';
import { FieldsOfStudyService } from './fields_of_study.service';
import { FieldsOfStudyController } from './fields_of_study.controller';

@Module({
  controllers: [FieldsOfStudyController],
  providers: [FieldsOfStudyService],
})
export class FieldsOfStudyModule {}
