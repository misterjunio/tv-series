import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { SeriesPage } from './series-page';
import { Series } from './series';
import { SavedSeriesService } from './series-saved-service';

@Component({
  selector: 'ons-page[series-saved]',
  template: require('./series-saved.html'),
  styles: [require('./series.css')]
})
export class SavedSeries implements OnInit {
  seriesList: Series[] = [];
  page: number = 0;
  isLoading: boolean = false;

  constructor(
    private savedSeries: SavedSeriesService,
    private _navi: OnsNavigator) { }

  ngOnInit() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.seriesList = this.savedSeries.getAll();
    this.isLoading = false;
  }

  push(series: Series) {
    this._navi.element.pushPage(SeriesPage, { data: series });
  }
}
