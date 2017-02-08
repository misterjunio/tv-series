import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Series} from './series';

@Injectable()
export class SeriesService {
  private baseUrl: string = 'http://api.tvmaze.com/';

  constructor(private http: Http) { }

  getShows(page: number): Promise<Series> {
    return this.http.get(`${this.baseUrl}shows?page=${page}`)
      .toPromise()
      .then(response => response.json())
      .then(items => items.map((item, idx) => {
        const id: number = idx + 1 + page *　100;
        return {
          name: item.name,
          summary: item.summary,
          image: item.image.medium,
          id
        };
      }));
  }
}