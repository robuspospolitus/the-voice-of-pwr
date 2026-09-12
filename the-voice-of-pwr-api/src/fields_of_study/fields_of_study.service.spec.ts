import { Test, TestingModule } from '@nestjs/testing';
import { FieldsOfStudyService } from './fields_of_study.service';

describe('FieldsOfStudyService', () => {
  let service: FieldsOfStudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldsOfStudyService],
    }).compile();

    service = module.get<FieldsOfStudyService>(FieldsOfStudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
