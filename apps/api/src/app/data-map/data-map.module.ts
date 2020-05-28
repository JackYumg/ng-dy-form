import { Module } from '@nestjs/common';
import { DataMapController } from './data-map/data-map.controller';
import { DataMapService } from './data-map/data-map.service';
import { DataMapDaoService } from './data-map.dao/data-map.dao.service';

@Module({
  controllers: [DataMapController],
  providers: [DataMapService, DataMapDaoService]
})
export class DataMapModule {}
