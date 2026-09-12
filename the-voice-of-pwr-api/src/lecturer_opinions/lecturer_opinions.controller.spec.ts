import { Test, TestingModule } from '@nestjs/testing';
import { LecturerOpinionsController } from './lecturer_opinions.controller';
import { LecturerOpinionsService } from './lecturer_opinions.service';

describe('LecturerOpinionsController', () => {
  let controller: LecturerOpinionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturerOpinionsController],
      providers: [LecturerOpinionsService],
    }).compile();

    controller = module.get<LecturerOpinionsController>(LecturerOpinionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
