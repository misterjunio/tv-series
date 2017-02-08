import { Component } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { Page } from './page';
import { Series } from './series';

@Component({
  selector: 'ons-page[my-series]',
  template: require('./my-series.html'),
  styles: [require('./my-series.css')]
})
export class MySeries {
  seriesList: Series[] = [];
  constructor(private _navi: OnsNavigator) {
  }

  push() {
    this._navi.element.pushPage(Page);
  }
}
