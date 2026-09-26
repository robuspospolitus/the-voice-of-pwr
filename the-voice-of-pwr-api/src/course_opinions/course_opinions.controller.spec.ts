import { Test, TestingModule } from '@nestjs/testing';
import { CourseOpinionsController } from './course_opinions.controller';
import { CourseOpinionsService } from './course_opinions.service';

describe('CourseOpinionsController', () => {
  let controller: CourseOpinionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseOpinionsController],
      providers: [CourseOpinionsService],
    }).compile();

    controller = module.get<CourseOpinionsController>(CourseOpinionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
