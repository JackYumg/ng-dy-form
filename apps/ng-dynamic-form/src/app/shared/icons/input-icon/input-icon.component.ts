import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DyIconService} from "../dy-icon.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: '[dynamic-form-input-icon]',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.less'],
  host: {
    '[class.anticon]': 'true'
  }
})
export class InputIconComponent implements OnInit, OnChanges {

  @Input()
  dyType: string;

  url: any;

  constructor(
    private dyIconService: DyIconService,
    private http: HttpClient,
    private element: ElementRef
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {dyType} = changes;
    if (!dyType.firstChange && !dyType.currentValue) {
      throw new Error('The dyType in dynamic-form-input-icon is required!');
    } else if (dyType) {
      this.url = `${this.dyIconService.dirPath}${dyType.currentValue}.svg`;
      this.getSvgs(this.url);
    }
  }

  getSvgs(url: any) {
    const e = this.http.get(url, {responseType: "text"});
    e.subscribe((res) => {
      this.element.nativeElement.appendChild(res);
    })
  }

  createSvg() {
    document.createElementNS()
  }


}
