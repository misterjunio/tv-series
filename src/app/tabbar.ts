import { Component, ViewChild } from '@angular/core';

import { MySeries } from './my-series';
import { AllSeries } from './all-series';
import { SeriesPage } from './series-page';

@Component({
  selector: 'ons-page[tabbar]',
  template: require('./tabbar.html')
})
export class AppTabbar {
  seriesList = MySeries;
  allSeries = AllSeries;
  page = SeriesPage;
}
