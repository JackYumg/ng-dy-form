import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './home/ngrx/home.reducers';
import { DataMapComponent } from './data-map/data-map.component';
import {NzTableModule} from "ng-zorro-antd";
import { DataMapFormComponent } from './data-map/data-map-form/data-map-form.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';

const MODULES = [
  NzCardModule,
  NzGridModule
];
@NgModule({
  declarations: [HomeComponent, DashboardComponent, DataMapComponent, DataMapFormComponent, MenuComponent, MenuFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ...MODULES,
    // 引入状态管理器
    StoreModule.forRoot({isCollapsed: homeReducer}),
  ]
})
export class HomeModule { }
