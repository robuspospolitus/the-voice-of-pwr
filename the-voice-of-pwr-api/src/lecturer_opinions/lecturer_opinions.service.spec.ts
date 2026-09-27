import { Test, TestingModule } from '@nestjs/testing';
import { LecturerOpinionsService } from './lecturer_opinions.service';

describe('LecturerOpinionsService', () => {
  let service: LecturerOpinionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturerOpinionsService],
    }).compile();

    service = module.get<LecturerOpinionsService>(LecturerOpinionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
