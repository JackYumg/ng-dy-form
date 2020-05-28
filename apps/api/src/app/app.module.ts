import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from "../../../../libs/api-interfaces/src/db-modules/mysql.module";
import { MenuModule } from './menu/menu.module';
import { DataMapModule } from './data-map/data-map.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [DatabaseModule, MenuModule, DataMapModule, FormsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
