import { Component } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

@Component({
  selector: 'ons-page[page]',
  template: require('./page.html'),
  styles: [require('./page.css')]
})
export class Page {
  constructor(private _navi: OnsNavigator) {
  }

  push() {
    this._navi.element.pushPage(Page);
  }
}
