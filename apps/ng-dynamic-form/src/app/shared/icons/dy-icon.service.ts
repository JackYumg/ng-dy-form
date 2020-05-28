import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DyIconService {

  dirPath: string;
  icons: string[] = [];

  constructor() {
    this.dirPath = 'assets/svg/dy-icon/'
  }

  addSvgPath(path: string) {
    this.dirPath = path;
  }

  addSvg(svg: string) {
    this.icons.push(svg);
  }
}
