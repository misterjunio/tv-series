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
    /**
     * Get the series that was pushed.
     */
    let tmp: any = params.data;
    this.series = tmp;
  }

  onSave(e, show) {
    if (e.target.checked) {
      this.savedSeries.add(show.id);
    } else {
      this.savedSeries.remove(show.id);
    }
  }

  ngOnInit() {
    this.loaded = true;
  }
}
