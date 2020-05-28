import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {SiderMenuComponent} from './components/sider-menu/sider-menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {ReuseTabComponent} from './components/reuse-tab/reuse-tab.component';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {ElementComponent} from './components/element/element.component';
import {FlexIconComponent} from './icons/flex-icon/flex-icon.component';
import {
  NzButtonModule,
  NzDividerModule,
  NzDropDownModule,
  NzFormModule,
  NzInputModule,
  NzInputNumberModule,
  NzMessageModule,
  NzModalModule,
  NzRadioModule,
  NzSelectModule,
  NzTableModule,
  NzTreeModule
} from "ng-zorro-antd";
import {InputElmComponent} from './components/form-element/input-elm/input-elm.component';
import {InputIconComponent} from './icons/input-icon/input-icon.component';

const COMPONENTS = [
  HeaderComponent, SiderMenuComponent, FooterComponent, ReuseTabComponent, InputIconComponent
];
const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  NzLayoutModule,
  NzTabsModule,
  NzIconModule,
  NzMenuModule,
  NzTableModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzDividerModule,
  NzModalModule,
  NzTreeModule,
  NzDropDownModule,
  NzRadioModule,
  NzInputNumberModule,
  NzMessageModule,
  NzSelectModule
];
const Directives = [];

@NgModule({
  declarations: [...COMPONENTS, ...Directives, ElementComponent, FlexIconComponent, InputElmComponent,
  ],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES,
    ...Directives
  ]
})
export class SharedModule {
}
