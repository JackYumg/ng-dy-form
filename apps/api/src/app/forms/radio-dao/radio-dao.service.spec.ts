import { Test, TestingModule } from '@nestjs/testing';
import { RadioDaoService } from './radio-dao.service';

describe('RadioDaoService', () => {
  let service: RadioDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadioDaoService],
    }).compile();

    service = module.get<RadioDaoService>(RadioDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
