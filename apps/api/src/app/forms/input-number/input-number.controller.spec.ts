import { Test, TestingModule } from '@nestjs/testing';
import { InputNumberController } from './input-number.controller';

describe('InputNumber Controller', () => {
  let controller: InputNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InputNumberController],
    }).compile();

    controller = module.get<InputNumberController>(InputNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
