import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'angular2-onsenui';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SeriesPage } from './series-page';
import { Series } from './series';
import { SeriesService } from './series-service';
import { SavedSeriesService } from './series-saved-service';
import { SeriesSearchService } from './series-search-service';

@Component({
  selector: 'ons-page[series-all]',
  template: require('./series-all.html'),
  styles: [require('./series.css')]
})
export class AllSeries implements OnInit {
  seriesList: Series[] = [];
  page: number = 0;
  isLoading: boolean = false;
  error: boolean = false;
  searchList: Observable<Series[]>;
  private searchTerms = new Subject<string>();
  isSearching: boolean = false;

  constructor(
    private series: SeriesService,
    private savedSeries: SavedSeriesService,
    private seriesSearch: SeriesSearchService,
    private _navi: OnsNavigator) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchList = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {if (term) {
        this.isSearching = true;
        return this.seriesSearch.searchSeries(term);
      } else {
        this.isSearching = false;
        return Observable.of<Series[]>([]);
      } })
      .catch(error => {
        throw Error(error);
      });
    this.loadMore();
  }

  loadMore() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this.series.getShows(this.page)
      .then(series => {
        this.seriesList = this.seriesList.concat(series);
        this.page += 1;
        this.isLoading = false;
        this.error = false;
      })
      .catch((error) => {
        this.error = true;
        this.isLoading = false;
        throw Error(error);
      });
  }

  push(series: Series) {
    this._navi.element.pushPage(SeriesPage, { data: series });
  }

  clearSearch(inputBox : HTMLInputElement) {
    inputBox.value = '';
    this.search('');
  }
}
