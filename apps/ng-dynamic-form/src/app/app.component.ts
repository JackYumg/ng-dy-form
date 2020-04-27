import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@dynamic-form/api-interfaces';

@Component({
  selector: 'dynamic-form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
