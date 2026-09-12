import { Test, TestingModule } from '@nestjs/testing';
import { DormsService } from './dorms.service';

describe('DormsService', () => {
  let service: DormsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DormsService],
    }).compile();

    service = module.get<DormsService>(DormsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
