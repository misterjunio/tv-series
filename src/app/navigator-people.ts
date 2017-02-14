import { Component } from '@angular/core';

import { PeoplePage } from './people-page';

@Component({
  selector: 'ons-page',
  template: require('./navigator-people.html')
})
export class PeopleNavigator {
  peoplePage = PeoplePage;
}
