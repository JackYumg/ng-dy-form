import {Injectable} from '@angular/core';
import {AppService} from "../../../shared/service/app.service";
import {environment} from "../../../../environments/environment";
import {DataMap} from "../../../../../../../libs/api-interfaces/src/models/data-source/DataMap.entity";

@Injectable({
  providedIn: 'root'
})
export class DataMapService {

  constructor(
    private appService: AppService
  ) {
  }

  findDataMapList(pageNo, pageSize, type, name) {
    const url = `${environment.baseurl}dataMap/getDataMapPage?`;
    return this.appService.getData(url, {pageNo, pageSize, type, name});
  }

  saveDataMap(dataMap: DataMap) {
    const url = `${environment.baseurl}dataMap/saveDataMap?`;
    return this.appService.postData(url, {}, {dataMap});
  }

  deleteDataMap(dataMap: DataMap) {
    const url = `${environment.baseurl}dataMap/deleteDataMap?`;
    return this.appService.postData(url, {dataMapId: dataMap.id}, {});
  }
}
