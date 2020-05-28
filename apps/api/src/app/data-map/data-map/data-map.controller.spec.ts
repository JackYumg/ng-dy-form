import { Test, TestingModule } from '@nestjs/testing';
import { DataMapController } from './data-map.controller';

describe('DataMap Controller', () => {
  let controller: DataMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataMapController],
    }).compile();

    controller = module.get<DataMapController>(DataMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
