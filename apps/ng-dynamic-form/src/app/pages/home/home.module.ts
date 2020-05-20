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

const MODULES = [
  NzCardModule,
  NzGridModule
];
@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ...MODULES,
    // 引入状态管理器
    StoreModule.forRoot({ isCollapsed: homeReducer })
  ]
})
export class HomeModule { }
