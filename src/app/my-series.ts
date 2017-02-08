import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';

import { SeriesPage } from './series-page';
import { Series } from './series';
import { SeriesService } from './series-service';
import { SavedSeriesService } from './saved-series-service';

@Component({
  selector: 'ons-page[my-series]',
  template: require('./my-series.html'),
  styles: [require('./my-series.css')]
})
export class MySeries {
  seriesList: Series[] = [];
  page: number = 0;
  isLoading: boolean = false;

  constructor(
    private series: SeriesService,
    private savedSeries: SavedSeriesService,
    private _navi: OnsNavigator) { }

  ngOnInit() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.seriesList = this.savedSeries.getAll();
    this.isLoading = false;

    /*this.series.getShows(this.page)
      .then(shows => {
        this.seriesList = this.seriesList.concat(shows);
        this.page += 1;
        this.isLoading = false;
        this.error = false;
      })
      .catch((error) => {
        this.error = true;
        this.isLoading = false;
      });*/
  }

  push(series: Series) {
    this._navi.element.pushPage(SeriesPage, { data: series });
  }
}
