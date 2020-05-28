import { Test, TestingModule } from '@nestjs/testing';
import { InputNumberDaoService } from './input-number-dao.service';

describe('InputNumberDaoService', () => {
  let service: InputNumberDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputNumberDaoService],
    }).compile();

    service = module.get<InputNumberDaoService>(InputNumberDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
