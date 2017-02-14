import { Component, ViewChild } from '@angular/core';
import { OnsSplitterContent, OnsSplitterSide } from 'angular2-onsenui';

import { Menu } from './menu';
import { SeriesNavigator } from './navigator-series';
import { PeopleNavigator } from './navigator-people';
import { SettingsPage } from './settings-page';

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class SeriesApp {
  @ViewChild(OnsSplitterContent) content: OnsSplitterContent;
  @ViewChild(OnsSplitterSide) side: OnsSplitterSide;

  pages = {
    menu: Menu,
    seriesNavigator: SeriesNavigator,
    peopleNavigator: PeopleNavigator,
    settingsPage: SettingsPage
  };

  load(name) {
    if (this.pages.hasOwnProperty(name)) {
      this.content.element.load(this.pages[name]);
      this.side.element.close();
    } else {
      console.error(`page ${name} not found`);
    }
  }
}
