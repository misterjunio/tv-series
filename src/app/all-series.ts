import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { SeriesPage } from './series-page';
import { Series } from './series';
import { SeriesService } from './series-service';
import { SavedSeriesService } from './saved-series-service';

@Component({
  selector: 'ons-page[all-series]',
  template: require('./all-series.html'),
  styles: [require('./series.css')]
})
export class AllSeries {
  seriesList: Series[] = [];
  page: number = 0;
  isLoading: boolean = false;
  error: boolean = false;

  constructor(
    private series: SeriesService,
    private savedSeries: SavedSeriesService,
    private _navi: OnsNavigator) { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this.series.getShows(this.page)
      .then(shows => {
        this.seriesList = this.seriesList.concat(shows);
        this.page += 1;
        this.isLoading = false;
        this.error = false;
      })
      .catch((error) => {
        this.error = true;
        this.isLoading = false;
      });
  }

  push(series: Series) {
    this._navi.element.pushPage(SeriesPage, { data: series });
  }
}
