import { Test, TestingModule } from '@nestjs/testing';
import { DataMap.DaoService } from './data-map.dao.service';

describe('DataMap.DaoService', () => {
  let service: DataMap.DaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataMap.DaoService],
    }).compile();

    service = module.get<DataMap.DaoService>(DataMap.DaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
