import { Test, TestingModule } from '@nestjs/testing';
import { InputDaoService } from './input-dao.service';

describe('InputDaoService', () => {
  let service: InputDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputDaoService],
    }).compile();

    service = module.get<InputDaoService>(InputDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
