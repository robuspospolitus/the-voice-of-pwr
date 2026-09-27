import { Test, TestingModule } from '@nestjs/testing';
import { DormOpinionsController } from './dorm_opinions.controller';
import { DormOpinionsService } from './dorm_opinions.service';

describe('DormOpinionsController', () => {
  let controller: DormOpinionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DormOpinionsController],
      providers: [DormOpinionsService],
    }).compile();

    controller = module.get<DormOpinionsController>(DormOpinionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
