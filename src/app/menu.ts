import { Component, Inject, forwardRef } from '@angular/core';
import { OnsSplitterContent } from 'angular2-onsenui';

import { SeriesApp } from './app';

@Component({
  selector: 'ons-page',
  template: require('./menu.html')
})
export class Menu {
  constructor( @Inject(forwardRef(() => SeriesApp)) private seriesApp: SeriesApp) {
  }
}
