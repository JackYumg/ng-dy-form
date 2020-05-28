import { Injectable } from '@nestjs/common';
import {Menu} from "../../../../../../libs/api-interfaces/src/models/data-source/Menu.entity";
import {MenuDaoService} from "../menu-dao/menu-dao.service";
import {generateUUID} from "../../../../../../libs/util/src";

@Injectable()
export class MenuService {
  constructor(
    private menuDaoService: MenuDaoService
  ) {
  }
   saveMenu(menu: Menu) {
    menu.uuid = generateUUID();
    return this.menuDaoService.saveMenu(menu);
  }

  findMenu() {
    return this.menuDaoService.findMenu();
  }

  deleteMenuById(menudId) {
    return this.menuDaoService.deleteMenuById(menudId);
  }
}
