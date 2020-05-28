import {Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {FormGroup, FormBuilder} from '@angular/forms';
import {FormEntity, FormItem} from "../../../../../../../libs/api-interfaces/src/models/form-models/items";

@Component({
  selector: 'dynamic-form-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit, AfterViewInit {

  dynamicFormGroup: FormGroup;
  // 布局系统，可能一个表单里面多个布局系统
  layoutSys: any = [];

  data: FormEntity = {
    formItems: [],
    layout: ''
  };

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private fb: FormBuilder
  ) {
    this.dynamicFormGroup = fb.group({});
  }

  @ViewChild('form', {static: true})
  formRef: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initEvent();
  }

  initEvent() {
    // 移动到该元素时触发
    fromEvent(this.el.nativeElement, 'dragenter').subscribe((event: any) => {
      event.dataTransfer.effectAllowed = 'move';
      const {dataset} = event.target;
      if (dataset.type === 'form') {
        this.setElementPre(event.target, '');
      }
    });

    fromEvent(this.el.nativeElement, 'dragover').subscribe((event: any) => {
      event.preventDefault();
      event.dataTransfer.effectAllowed = 'move';
      const {dataset} = event.target;
      if (dataset.type === 'form') {
        this.setElementPre(event.target, '');
      }
    });

    fromEvent(this.el.nativeElement, 'drop').subscribe((event: any) => {
      console.log('some thiing');
      const {dataset} = event.target;
      if (dataset.type === 'form') {
        console.log(event.dataTransfer.getData('formData'));
        this.setDefault(event.target, '');
      }
    });

    fromEvent(this.el.nativeElement, 'dragleave').subscribe((event: any) => {
      const {dataset} = event.target;
      if (dataset.type === 'form') {
        this.setDefault(event.target, '');
      }
    });
  }

  // 设置状态为三种，预选、选中
  setElementPre(element, property) {
    const pre = `border: 1px solid #2196F3;
     box-shadow: 0px 0px 4px #2196F3;
     margin: 12px;`;
    this.render.setAttribute(element, 'style', pre);
  }

  // 设置默认状态
  setDefault(element, property) {
    this.render.removeAttribute(element, 'style');
  }

  // 添加元素
  addFormElementItem(element: FormItem) {

  }

  // 删除元素
  removeFormElementItem(element: FormItem) {

  }
}
