import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home/ngrx/home.service";
import {NzContextMenuService, NzDropdownMenuComponent, NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'dynamic-form-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  nodes: any[] = [];
  formOption: any = {
    parentId: '',
    menuId: '',
    showForm: false,
    level: 1,
    parentName: ''
  };

  constructor(
    private menuService: HomeService,
    private nzContextMenuService: NzContextMenuService,
    private messageService: NzMessageService
  ) {
  }

  ngOnInit(): void {
    this.findAllMenus();
  }

  findAllMenus() {
    const obserable = this.menuService.getMenus();
    obserable.subscribe(({data}) => {
      this.nodes = data || [];
    })
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    $event.stopPropagation();
    this.nzContextMenuService.create($event, menu);
  }

  // 添加頂級目錄
  addTopMenu() {
    this.formOption.menuId = '';
    this.formOption.parentId = -1;
    this.formOption.showForm = true;
    this.formOption.level = 1;
    this.formOption.parentName = '无';
  }

  // 添加子目錄
  addSubMenu(node) {
    this.formOption.menuId = '';
    this.formOption.parentId = node.origin.id;
    this.formOption.showForm = true;
    this.formOption.level = 1;
    this.formOption.parentName = node.origin.name;
  }

  deleteMenu(node) {
    if (node.origin.children.length > 0) {
      this.messageService.error('该目录下存在子目录无法删除!');
    }else {
      const observable = this.menuService.deleteMenu(node.origin.id);
      observable.subscribe((res) => {
        this.messageService.success('删除成功');
        this.findAllMenus();
      })
    }
  }

  successCall(event) {
    this.back();
    this.findAllMenus();
  }

  back() {
    this.formOption.showForm = false;
  }
}
