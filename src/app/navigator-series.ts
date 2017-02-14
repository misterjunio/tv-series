import { Component } from '@angular/core';

import { SeriesTabbar } from './tabbar-series';

@Component({
  selector: 'ons-page[navigator-series]',
  template: require('./navigator-series.html')
})
export class SeriesNavigator {
  seriesTabbar = SeriesTabbar;
}
