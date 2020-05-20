import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dynamic-form-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isCollapsed$: Observable<boolean>;
  constructor(
    private store: Store<{ isCollapsed: boolean }>
  ) { 
    this.isCollapsed$ = this.store.select('isCollapsed');
  }

  ngOnInit(): void {
  }

}
