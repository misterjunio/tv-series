import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { People } from './people';

@Injectable()
export class PeopleSearchService {
  private baseUrl: string = 'http://api.tvmaze.com/';

  constructor(private http: Http) { }

  searchPeople(query: string): Observable<People[]> {
    let ret = this.http.get(`${this.baseUrl}/search/people?q=${this._toQueryString(query)}`)
      .map(this._extractData)
      .catch(this._handleError);
    return ret;
  }

  private _toQueryString(personName: string): string {
    return personName.replace(/\s+/g, '-').toLowerCase();
  }

  private _extractData(res: Response) {
    const peopleSearch: People[] = [];
    for (let item of res.json()) {
      peopleSearch.push({
        name: item.person.name ? item.person.name : 'Name unavailable',
        picture: item.person.image ? (item.person.image.medium ? item.person.image.medium : item.person.image.original) : null,
        id: item.person.id
      })
    }
    return peopleSearch as People[];
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
