import {Provider} from '@angular/compiler/src/core';
import {
  PlusOutline,
  UserOutline,
  LaptopOutline,
  NotificationOutline,
  UnorderedListOutline,
  MenuUnfoldOutline,
  MenuFoldOutline,
  AppstoreOutline,
  TableOutline,
  SettingOutline,
  ReadOutline,
  MenuOutline,
  FileOutline,
  FolderOutline,
  FolderOpenOutline
} from '@ant-design/icons-angular/icons';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';

const ICONS: IconDefinition[] = [
  PlusOutline,
  UserOutline,
  LaptopOutline,
  NotificationOutline,
  UnorderedListOutline,
  MenuUnfoldOutline,
  MenuFoldOutline,
  AppstoreOutline,
  TableOutline,
  SettingOutline,
  ReadOutline,
  MenuOutline,
  FileOutline,
  FolderOutline,
  FolderOpenOutline
];
export const iconProviders: Provider = [
  {
    provide: NZ_ICONS,
    useValue: ICONS,
  },
];
