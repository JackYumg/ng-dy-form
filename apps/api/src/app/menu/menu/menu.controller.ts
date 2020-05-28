import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ResponeData} from "../../util/response";
import {Menu} from "../../../../../../libs/api-interfaces/src/models/data-source/Menu.entity";
import {MenuService} from "./menu.service";

@Controller('menu')
export class MenuController {
  constructor(
    private menuService: MenuService
  ) {
  }

  @Post('saveMenu')
  saveMenu(
    @Body('menu') menu: Menu
  ): ResponeData {
    const result = this.menuService.saveMenu(menu);
    return {
      code: 2000,
      data: result,
      message: '成功'
    }
  }

  @Get('findMenuTree')
  async findMenuTree() {
    const result = await this.menuService.findMenu();
    return {
      code: 2000,
      data: result,
      message: '成功'
    }
  }

  @Post('deleteMenu')
  async deleteMenu(
    @Query('menudId') menudId
  ) {
    const result = await this.menuService.deleteMenuById(menudId);
    return {
      code: 2000,
      data: result,
      message: '成功'
    }
  }
}
