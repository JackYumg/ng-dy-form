import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SiderMenuComponent } from './components/sider-menu/sider-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReuseTabComponent } from './components/reuse-tab/reuse-tab.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ElementComponent } from './components/element/element.component';
import { FlexIconComponent } from './icons/flex-icon/flex-icon.component';

const COMPONENTS = [
  HeaderComponent, SiderMenuComponent, FooterComponent,ReuseTabComponent
];
const MODULES = [
  NzLayoutModule,
  NzTabsModule,
  NzIconModule,
  NzMenuModule,
  FormsModule,

]

@NgModule({
  declarations: [...COMPONENTS,   ElementComponent,  FlexIconComponent,
  ],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
