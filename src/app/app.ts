import {Component, ViewChild} from '@angular/core';
import {OnsSplitterContent, OnsSplitterSide} from 'angular2-onsenui';

import {Page} from './page';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  page = Page;
}
