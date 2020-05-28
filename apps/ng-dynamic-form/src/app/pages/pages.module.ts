import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { SharedModule } from '../shared/shared.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ToolsComponent } from './work-space/tools/tools.component';
import { FormComponent } from './work-space/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertiePanelComponent } from './work-space/propertie-panel/propertie-panel.component';
import { PropertyFormComponent } from './work-space/property-form/property-form.component';
import { FormItemComponent } from './work-space/form-item/form-item.component';
const MODULES = [
  NzCollapseModule,
  FormsModule,
  ReactiveFormsModule
]
@NgModule({
  declarations: [WorkSpaceComponent, ToolsComponent, FormComponent, PropertiePanelComponent, PropertyFormComponent, FormItemComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ...MODULES
  ]
})
export class PagesModule { }
