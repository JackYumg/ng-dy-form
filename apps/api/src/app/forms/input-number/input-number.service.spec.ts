import { Test, TestingModule } from '@nestjs/testing';
import { InputNumberService } from './input-number.service';

describe('InputNumberService', () => {
  let service: InputNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputNumberService],
    }).compile();

    service = module.get<InputNumberService>(InputNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
