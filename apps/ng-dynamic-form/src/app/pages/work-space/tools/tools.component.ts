import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'dynamic-form-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less']
})
export class ToolsComponent implements OnInit, OnDestroy, AfterViewInit {
  filterText: any = '';
  panels: any[] = [
    {
      active: true,
      name: '布局',
      disabled: false,
      models: [
        { name: '网格', type: 'appstore' },
        { name: '表格', type: 'table' },
      ]
    },
    {
      active: false,
      disabled: false,
      name: '表单'
    },
    {
      active: false,
      disabled: false,
      name: '自定义'
    }
  ];

  @ViewChild('toolsTpl', { static: true })
  toolsRef: ElementRef;
  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initEvent();
  }

  initEvent() {
    fromEvent(this.toolsRef.nativeElement, 'dragstart').subscribe((event: any) => {
      // console.group('携带数据');
      const { dataset } = event.target;
      event.dataTransfer.setData('formData', dataset);
      // console.groupEnd();
    });
    fromEvent(this.toolsRef.nativeElement, 'dragend').subscribe((event: any) => {
      if (event.target.dataset.type && event.target.dataset.type === 'form') {
        console.group('接收数据');
        const { dataset } = event.target;
        let formData = event.dataTransfer.getData('formData');
        console.log(formData);
        console.groupEnd();
      }
    });
  }

  ngOnDestroy() {

  }

}
