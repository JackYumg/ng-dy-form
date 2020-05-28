import {Injectable} from '@angular/core';
import {AppService} from "../../../shared/service/app.service";
import {Menu} from "../../../../../../../libs/api-interfaces/src/models/data-source/Menu.entity";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private service: AppService
  ) {
  }

  saveMenu(menu: Menu) {
    const url = `${environment.baseurl}menu/saveMenu?`
    return this.service.postData(url, {}, {menu});
  }

}
