import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Item } from './item.model';

@Injectable()
export class QuackerNewsService {
  private apiUrl: string = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: Http) {
  }

  getHot(): Observable<[number]> {
    return this.http.get(`${this.apiUrl}/topstories.json`)
      .map(res => res.json());
  }

  getNew(): Observable<[number]> {
    return this.http.get(`${this.apiUrl}/newstories.json`)
      .map(res => res.json());
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/item/${id}.json`)
      .map(res => new Item(res.json()));
  }
}
