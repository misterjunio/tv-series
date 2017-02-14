import { Component } from '@angular/core';

import { MySeries } from './my-series';
import { AllSeries } from './all-series';
import { SeriesPage } from './series-page';

@Component({
  selector: 'ons-page[tabbar-series]',
  template: require('./tabbar-series.html')
})
export class SeriesTabbar {
  seriesList = MySeries;
  allSeries = AllSeries;
  page = SeriesPage;
}
