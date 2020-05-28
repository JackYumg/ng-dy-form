import { Module } from '@nestjs/common';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { MenuDaoService } from './menu-dao/menu-dao.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService, MenuDaoService]
})
export class MenuModule {}
