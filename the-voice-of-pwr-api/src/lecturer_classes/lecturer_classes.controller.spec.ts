import { Test, TestingModule } from '@nestjs/testing';
import { LecturerClassesController } from './lecturer_classes.controller';
import { LecturerClassesService } from './lecturer_classes.service';

describe('LecturerClassesController', () => {
  let controller: LecturerClassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturerClassesController],
      providers: [LecturerClassesService],
    }).compile();

    controller = module.get<LecturerClassesController>(LecturerClassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
