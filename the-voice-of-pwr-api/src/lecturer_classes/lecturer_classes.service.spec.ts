import { Test, TestingModule } from '@nestjs/testing';
import { LecturerClassesService } from './lecturer_classes.service';

describe('LecturerClassesService', () => {
  let service: LecturerClassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturerClassesService],
    }).compile();

    service = module.get<LecturerClassesService>(LecturerClassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
