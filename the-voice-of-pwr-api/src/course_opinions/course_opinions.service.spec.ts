import { Test, TestingModule } from '@nestjs/testing';
import { CourseOpinionsService } from './course_opinions.service';

describe('CourseOpinionsService', () => {
  let service: CourseOpinionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseOpinionsService],
    }).compile();

    service = module.get<CourseOpinionsService>(CourseOpinionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
