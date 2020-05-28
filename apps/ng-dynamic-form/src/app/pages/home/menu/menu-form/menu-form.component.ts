import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MenuService} from "../menu.service";
import {Menu} from "../../../../../../../../libs/api-interfaces/src/models/data-source/Menu.entity";

@Component({
  selector: 'dynamic-form-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.less']
})
export class MenuFormComponent implements OnInit, OnChanges {

  menuForm: FormGroup;
  @Input()
  parentId;
  @Input()
  menuId;
  @Input()
  level;
  @Input()
  parentName;

  @Output()
  successCall: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private menuService: MenuService
  ) {
    this.initForm();
  }

  initForm() {
    this.menuForm = this.fb.group({
      name: [],
      commit: [],
      order: [],
      parentId: [],
      route: [],
      icon: [],
      isParent: [],
      level: []
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.menuForm.patchValue({
      level: this.level
    });
  }

  resetForm() {
    this.menuForm.reset();
  }

  submitForm() {
    const value = this.menuForm.value;
    if (this.menuId) {

    } else {
      this.saveMenu(value);
    }
  }

  saveMenu(menu: Menu) {
    const observable = this.menuService.saveMenu(menu);
    observable.subscribe((res) => {
      this.successCall.emit(res);
    });
  }

}
