import { Component, ViewChild } from '@angular/core';
import { OnsSplitterContent, OnsSplitterSide } from 'angular2-onsenui';

import { MySeries } from './my-series';
import { SeriesPage } from './series-page';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class SeriesApp {
  page = SeriesPage;
  seriesList = MySeries;
}
