import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { openMenu, closeMenu } from '../../../pages/home/home/ngrx/home.actions';

@Component({
  selector: 'dynamic-form-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  @Output()
  isCollapsed: boolean;
  constructor(
    private store: Store<{ isCollapsed: boolean }>
  ) { }

  ngOnInit(): void {
    this.toggle.subscribe((isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.store.dispatch(openMenu({ isCollapsed: this.isCollapsed }));
    } else {
      this.store.dispatch(closeMenu({ isCollapsed: this.isCollapsed }));
    }
  }
}
