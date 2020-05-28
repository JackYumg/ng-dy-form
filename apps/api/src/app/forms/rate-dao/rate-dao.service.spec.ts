import { Test, TestingModule } from '@nestjs/testing';
import { RateDaoService } from './rate-dao.service';

describe('RateDaoService', () => {
  let service: RateDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateDaoService],
    }).compile();

    service = module.get<RateDaoService>(RateDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
