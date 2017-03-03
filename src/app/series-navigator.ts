import { Component } from '@angular/core';

import { SeriesTabbar } from './series-tabbar';

@Component({
  selector: 'ons-page[series-navigator]',
  template: `<ons-navigator [page]="seriesTabbar"></ons-navigator>`
})
export class SeriesNavigator {
  seriesTabbar = SeriesTabbar;
}
