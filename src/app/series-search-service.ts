import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Series } from './series';

@Injectable()
export class SeriesSearchService {
  private baseUrl: string = 'http://api.tvmaze.com/';

  constructor(private http: Http) { }

  searchSeries(query: string): Observable<Series[]> {
    let ret = this.http.get(`${this.baseUrl}/search/shows?q=${this._toQueryString(query)}`)
      .map(this._extractData)
      .catch(this._handleError);
    return ret;
  }

  private _toQueryString(seriesName: string): string {
    return seriesName.replace(/\s+/g, '-').toLowerCase();
  }

  private _extractData(res: Response) {
    const seriesSearch: Series[] = [];
    for (let item of res.json()) {
      seriesSearch.push({
        name: item.show.name ? item.show.name : 'Name unavailable',
        summary: item.show.summary ? item.show.summary : 'Summary unavailable',
        picture: item.show.image ? (item.show.image.medium ? item.show.image.medium : item.show.image.original) : null,
        id: item.show.id
      })
    }
    return seriesSearch as Series[];
  }


  private _handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
