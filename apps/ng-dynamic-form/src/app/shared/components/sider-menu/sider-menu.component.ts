import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-form-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.less']
})
export class SiderMenuComponent implements OnInit {

  $isCollapsed:any = true;
  constructor() { }

  ngOnInit(): void {
  }

}
