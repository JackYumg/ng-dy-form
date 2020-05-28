import {Injectable} from '@nestjs/common';
import {getManager} from "typeorm";
import {Menu} from "../../../../../../libs/api-interfaces/src/models/data-source/Menu.entity";

@Injectable()
export class MenuDaoService {
  private manage = getManager();

  saveMenu(menu: Menu) {
    return this.manage.getRepository(Menu).save(menu);
  }

  updateMenu(menu: Menu) {
    return this.manage.getRepository(Menu).update({id: menu.id}, menu);
  }

  findMenu() {
    return this.manage.getTreeRepository(Menu).findTrees();
  }

  findMneuById(id) {
    return this.manage.getRepository(Menu).findOne({id});
  }

  deleteMenuById(id) {
    return this.manage.getTreeRepository(Menu).delete([id]);
  }
}
