import { Test, TestingModule } from '@nestjs/testing';
import { LecturersFacultyService } from './lecturers_faculty.service';

describe('LecturersFacultyService', () => {
  let service: LecturersFacultyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturersFacultyService],
    }).compile();

    service = module.get<LecturersFacultyService>(LecturersFacultyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
