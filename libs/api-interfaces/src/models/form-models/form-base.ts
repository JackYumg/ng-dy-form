import {InDynDrop} from "./form-element";
import {fromEvent} from "rxjs";

export class FormBase implements InDynDrop{
  element:any;
  constructor() {

  }

  subscribeDrop() {
    fromEvent(this.element, '').subscribe( () => {

    });
  }

  unsubscribeDrop() {
  }
}
