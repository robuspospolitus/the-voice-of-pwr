import { Test, TestingModule } from '@nestjs/testing';
import { DormOpinionsService } from './dorm_opinions.service';

describe('DormOpinionsService', () => {
  let service: DormOpinionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DormOpinionsService],
    }).compile();

    service = module.get<DormOpinionsService>(DormOpinionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
