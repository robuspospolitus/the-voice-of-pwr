import { Test, TestingModule } from '@nestjs/testing';
import { FieldsOfStudyController } from './fields_of_study.controller';
import { FieldsOfStudyService } from './fields_of_study.service';

describe('FieldsOfStudyController', () => {
  let controller: FieldsOfStudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldsOfStudyController],
      providers: [FieldsOfStudyService],
    }).compile();

    controller = module.get<FieldsOfStudyController>(FieldsOfStudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
