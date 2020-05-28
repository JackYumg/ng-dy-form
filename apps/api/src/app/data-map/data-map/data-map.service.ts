import {Injectable} from '@nestjs/common';
import {DataMapDaoService} from "../data-map.dao/data-map.dao.service";
import {DataMap} from "../../../../../../libs/api-interfaces/src/models/data-source/DataMap.entity";
import {generateUUID} from "../../../../../../libs/util/src";

@Injectable()
export class DataMapService {
  constructor(
    private dataMapDaoService: DataMapDaoService
  ) {
  }

  findDataMaps(pageNo, pageSize, name, type) {
    const skip = (pageNo - 1) * pageSize;
    console.log(skip);
    return this.dataMapDaoService.findDataMaps(skip, pageSize, name, type);
  }

  saveDataMap(dataMap: DataMap) {
    dataMap.uuid = generateUUID();
    dataMap.createTime = new Date().getTime().toString();
    return this.dataMapDaoService.insertDataMap(dataMap);
  }

  deleteDataMap(dataMapId) {
    return this.dataMapDaoService.deleteDataMap(dataMapId);
  }

  findDataMapsByNames(names: string[]) {
    return this.dataMapDaoService.findDataMapByNames(names);
  }
}
