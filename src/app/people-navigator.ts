import { Component } from '@angular/core';

import { PeoplePage } from './people-page';

@Component({
  selector: 'ons-page[people-navigator]',
  template: `<ons-navigator [page]="peoplePage"></ons-navigator>`
})
export class PeopleNavigator {
  peoplePage = PeoplePage;
}
