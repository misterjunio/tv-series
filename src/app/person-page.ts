import { Component } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';

import { Person } from './person';

@Component({
  selector: 'ons-page[person-page]',
  template: require('./person-page.html'),
  styles: [require('./series-page.css')]
})
export class PersonPage {
  person: Person;

  constructor(
    private _navi: OnsNavigator,
    private params: Params
  ) {
    let tmp: any = params.data;
    this.person = tmp;
  }
}
