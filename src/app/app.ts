import { Component, ViewChild } from '@angular/core';

import { AppTabbar } from './tabbar';

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class SeriesApp {
  tabbar = AppTabbar;
}
