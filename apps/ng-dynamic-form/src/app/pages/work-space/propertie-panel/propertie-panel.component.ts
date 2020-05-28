import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {toNumber} from "ng-zorro-antd";

@Component({
  selector: 'dynamic-form-propertie-panel',
  templateUrl: './propertie-panel.component.html',
  styleUrls: ['./propertie-panel.component.less']
})
export class PropertiePanelComponent implements OnInit, AfterViewInit, OnDestroy {

  events: {
    mousedown: any,
    mouseup: any,
    mousemove: any
  } = {
    mousedown: null,
    mouseup: null,
    mousemove: null
  };

  panelOptions = {
    tab: 'a',
    isPress: false
  };

  @ViewChild('titleTpl', {static: true})
  titleRef: ElementRef;
  @ViewChild('moveTpl', {static: true})
  moveRef: ElementRef;

  @Input()
  parentContainer: Element;

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initEvent();
  }

  initEvent() {
    const elm = this.titleRef.nativeElement;
    let start = {
      x: 0,
      y: 0
    };
    let dataXY = {
      dataX: 0,
      dataY: 0
    };

    let initXY = {
      right: 0,
      top: 0
    };
    // @ts-ignore
    this.events.mousedown = fromEvent(elm, 'mousedown').subscribe((event: MouseEvent) => {
      event.stopPropagation();
      this.panelOptions.isPress = true;
      start.x = event.x;
      start.y = event.y;

      let x = this.getNUM(this.element.nativeElement.style.right);
      let y = this.getNUM(this.element.nativeElement.style.top);

      initXY = {
        right: x,
        top: y
      };

      console.log(initXY);
    });

    // @ts-ignore
    this.events.mousemove = fromEvent(document, 'mousemove').subscribe((event: MouseEvent) => {
      event.stopPropagation();
      if (this.panelOptions.isPress) {
        dataXY.dataX = start.x - event.x;
        dataXY.dataY = event.y - start.y;

        let values = {
          x: initXY.right + dataXY.dataX,
          y: initXY.top + dataXY.dataY
        };

        // 边界处理
        if (values.x < 0) {
          values.x = 0;
        }

        if (values.y < 0) {
          values.y = 0;
        }

        if (values.x > this.parentContainer.clientWidth - this.element.nativeElement.clientWidth) {
          values.x = this.parentContainer.clientWidth - this.element.nativeElement.clientWidth;
        }

        if (values.y > this.parentContainer.clientHeight - this.element.nativeElement.clientHeight) {
          values.y = this.parentContainer.clientHeight - this.element.nativeElement.clientHeight;
        }

        this.renderer2.setStyle(this.element.nativeElement, 'right', `${values.x}px`);
        this.renderer2.setStyle(this.element.nativeElement, 'top', `${values.y}px`);
      }
    });

    // @ts-ignore
    this.events.mouseup = fromEvent(document, 'mouseup').subscribe((event: MouseEvent) => {
      event.stopPropagation();
      this.panelOptions.isPress = false;
    });
  }

  ngOnDestroy(): void {
    if (this.events.mousedown) {
      this.events.mousedown.unsubscribe();
    }
    if (this.events.mousemove) {
      this.events.mousemove.unsubscribe();
    }
    if (this.events.mouseup) {
      this.events.mouseup.unsubscribe();
    }
  }

  getNUM(pxs: string): number {
    return toNumber(pxs.replace('px', ''));
  }


}
