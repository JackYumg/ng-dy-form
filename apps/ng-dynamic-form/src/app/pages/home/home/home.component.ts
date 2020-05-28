import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {HomeService} from "./ngrx/home.service";
import {Menu} from "../../../../../../../libs/api-interfaces/src/models/data-source/Menu.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'dynamic-form-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isCollapsed$: Observable<boolean>;
  menus: Menu[] = [];
  constructor(
    private store: Store<{ isCollapsed: boolean }>,
    private homeService: HomeService,
    private router: Router
  ) {
    this.isCollapsed$ = this.store.select('isCollapsed');
  }

  ngOnInit(): void {
    this.homeService.getMenus().subscribe((res) => {
      this.menus = res.data || [];
    })
  }

  goto(route) {
    this.router.navigate([route]);
  }

}
