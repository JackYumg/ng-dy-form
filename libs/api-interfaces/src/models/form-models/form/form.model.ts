import {FormGroup} from "@angular/forms";

export class FormModel {
  // 存储表单的group
  formGroup: FormGroup;
  // 表达布局方式
  layout: 'horizontal' | 'vertical' | 'inline';
}
