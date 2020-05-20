import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { SharedModule } from '../shared/shared.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ToolsComponent } from './work-space/tools/tools.component';
import { FormComponent } from './work-space/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const MODULES = [
  NzCollapseModule,
  FormsModule,
  ReactiveFormsModule
]
@NgModule({
  declarations: [WorkSpaceComponent, ToolsComponent, FormComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ...MODULES
  ]
})
export class PagesModule { }
