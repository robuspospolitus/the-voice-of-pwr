import { Test, TestingModule } from '@nestjs/testing';
import { DormsController } from './dorms.controller';
import { DormsService } from './dorms.service';

describe('DormsController', () => {
  let controller: DormsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DormsController],
      providers: [DormsService],
    }).compile();

    controller = module.get<DormsController>(DormsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
