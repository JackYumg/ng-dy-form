import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'dynamic-form-data-map-form',
  templateUrl: './data-map-form.component.html',
  styleUrls: ['./data-map-form.component.less']
})
export class DataMapFormComponent implements OnInit {

  dataMapForm: FormGroup;
  data: any = {};
  type: 'add' | 'edit' | 'dispaly';

  constructor(
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.dataMapForm = this.fb.group({
      name: [],
      type: [],
      value: [],
      commit: []
    });
    this.dataMapForm.valueChanges.subscribe((params) => {
      this.data = params;
    })
  }

}
