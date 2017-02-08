import { Component, ViewChild } from '@angular/core';
import { OnsSplitterContent, OnsSplitterSide } from 'angular2-onsenui';

import { MySeries } from './my-series';
import { Page } from './page';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class SeriesApp {
  page = Page;
  seriesList = MySeries;
}
