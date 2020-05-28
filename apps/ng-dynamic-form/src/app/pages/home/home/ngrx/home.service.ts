import {Injectable} from '@angular/core';
import {AppService} from "../../../../shared/service/app.service";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private service: AppService
  ) {
  }

  // 获取菜单
  getMenus() {
    const url = `${environment.baseurl}menu/findMenuTree?`;
    return this.service.getData(url, {});
  }

  // 删除菜单

  deleteMenu(menudId) {
    const url = `${environment.baseurl}menu/deleteMenu?`;
    return this.service.postData(url, {menudId}, {})
  }
}
