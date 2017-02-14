import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Series } from './series';

@Injectable()
export class SeriesService {
  private baseUrl: string = 'http://api.tvmaze.com/';

  constructor(private http: Http) { }

  getShows(page: number): Promise<Series> {
    return this.http.get(`${this.baseUrl}shows?page=${page}`)
      .toPromise()
      .then(response => this._shuffle(response.json()))
      .then(items => items.map((item, idx) => {
        return {
          name: item.name ? item.name : 'Name unavailable',
          summary: item.summary ? item.summary : 'Summary unavailable',
          picture: item.image ? (item.image.medium ? item.image.medium : item.image.original) : null,
          id: item.id
        };
      }));
  }

  private _shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }
}