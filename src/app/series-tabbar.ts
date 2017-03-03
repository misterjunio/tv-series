import { Component } from '@angular/core';

import { SavedSeries } from './series-saved';
import { AllSeries } from './series-all';
import { SeriesPage } from './series-page';

@Component({
  selector: 'ons-page[series-tabbar]',
  template: require('./series-tabbar.html')
})
export class SeriesTabbar {
  seriesList = SavedSeries;
  allSeries = AllSeries;
  page = SeriesPage;
}
