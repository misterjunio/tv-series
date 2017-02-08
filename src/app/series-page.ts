import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';

import { Series } from './series';
import { SeriesService } from './series-service';
import { SavedSeriesService } from './saved-series-service';

@Component({
  selector: 'ons-page[page]',
  template: require('./series-page.html'),
  styles: [require('./series-page.css')]
})
export class SeriesPage {
  series: Series;
  loaded: boolean = false;

  constructor(
    private _navi: OnsNavigator,
    private params: Params,
    private savedSeries: SavedSeriesService
  ) {
    let tmp: any = params.data;
    this.series = tmp;
  }

  onSave(event, series) {
    if (event.target.checked) {
      this.savedSeries.add(series);
    } else {
      this.savedSeries.remove(series);
    }
  }

  ngOnInit() {
    this.loaded = true;
  }
}
