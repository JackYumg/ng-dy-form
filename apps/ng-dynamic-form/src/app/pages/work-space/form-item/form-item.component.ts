import {Component, Input, OnInit} from '@angular/core';
import {FormItem} from "../../../../../../../libs/api-interfaces/src/models/form-models/items";

@Component({
  selector: 'dynamic-form-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.less']
})
export class FormItemComponent implements OnInit {

  @Input()
  formItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
