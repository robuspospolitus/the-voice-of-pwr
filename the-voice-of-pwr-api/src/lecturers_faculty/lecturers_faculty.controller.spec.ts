import { Test, TestingModule } from '@nestjs/testing';
import { LecturersFacultyController } from './lecturers_faculty.controller';
import { LecturersFacultyService } from './lecturers_faculty.service';

describe('LecturersFacultyController', () => {
  let controller: LecturersFacultyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturersFacultyController],
      providers: [LecturersFacultyService],
    }).compile();

    controller = module.get<LecturersFacultyController>(LecturersFacultyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
