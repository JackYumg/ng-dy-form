import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@dynamic-form/api-interfaces';
import { environment } from '../environments/environment';

@Component({
  selector: 'dynamic-form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  hello$:any;
  constructor(private http: HttpClient) {
  }
}
