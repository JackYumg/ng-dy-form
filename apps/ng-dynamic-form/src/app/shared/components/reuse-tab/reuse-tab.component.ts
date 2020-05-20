import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dynamic-form-reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.less']
})
export class ReuseTabComponent implements OnInit {

  tabs:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.getTabs();
  }

  getTabs() {
    const tabs = ['Tab 1', 'Tab 2'];
    this.tabs = new Observable( (res) => {
      res.next(tabs);
    });
  }
}
