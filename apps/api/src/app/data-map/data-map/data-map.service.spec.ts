import { Test, TestingModule } from '@nestjs/testing';
import { DataMapService } from './data-map.service';

describe('DataMapService', () => {
  let service: DataMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataMapService],
    }).compile();

    service = module.get<DataMapService>(DataMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
