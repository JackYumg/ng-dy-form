import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {DataMapService} from "./data-map.service";
import {DataMap} from "../../../../../../libs/api-interfaces/src/models/data-source/DataMap.entity";

@Controller('dataMap')
export class DataMapController {
  constructor(
    private dataMapService: DataMapService
  ) {
  }

  /**
   * 分页查询数据字典
   * @param pageNo
   * @param pageSize
   * @param type
   * @param name
   */
  @Get('getDataMapPage')
  async getDataMapPage(
    @Query('pageNo') pageNo: number,
    @Query('pageSize') pageSize: number,
    @Query('type') type: string,
    @Query('name') name: string
  ) {
    const result = await this.dataMapService.findDataMaps(pageNo, pageSize, name, type);
    return {
      data: result, code: 2000, message: '成功'
    }
  }

  @Post('getDataMapByName')
  async getDataMapByName(
    @Body('names') names: string[]
  ) {
    let result: any = [];
    if (!names || names.length <= 0) {
      result = [];
    } else {
      result = await this.dataMapService.findDataMapsByNames(names);
    }
    return {
      data: result,
      code: 2000,
      message: '成功'
    };
  }

  @Post('saveDataMap')
  async saveDataMap(
    @Body('dataMap') dataMap: DataMap
  ) {
    const result = await this.dataMapService.saveDataMap(dataMap);
    return {
      data: result, code: 2000, message: '成功'
    }
  }


  @Post('deleteDataMap')
  deleteDataMap(
    @Query('dataMapId') dataMapId: string
  ) {
    const result = this.dataMapService.deleteDataMap(dataMapId);
    return {
      data: result,
      code: 2000,
      message: '成功'
    };
  }
}
