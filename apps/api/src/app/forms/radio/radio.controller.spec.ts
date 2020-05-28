import { Test, TestingModule } from '@nestjs/testing';
import { RadioController } from './radio.controller';

describe('Radio Controller', () => {
  let controller: RadioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RadioController],
    }).compile();

    controller = module.get<RadioController>(RadioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
