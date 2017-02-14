import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { People } from './people';
import { PeopleSearchService } from './people-search-service';

@Component({
  selector: 'ons-page',
  template: require('./people-page.html'),
  styles: [require('./series.css')]
})
export class PeoplePage implements OnInit {
  error: boolean = false;
  peopleList: Observable<People[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private peopleSearch: PeopleSearchService,
    private _navi: OnsNavigator) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.peopleList = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.peopleSearch.searchPeople(term) : Observable.of<People[]>([]));
  }

  push(people: People) {
    this._navi.element.pushPage(PeoplePage, { data: people });
  }

  clearSearch(inputBox: HTMLInputElement) {
    inputBox.value = '';
    this.search('');
  }
}
