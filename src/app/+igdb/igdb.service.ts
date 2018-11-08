import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiKeyQuery } from '../+state';

import { Count, Game } from '../models/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {

  url: string

  constructor(private http: HttpClient, private query: ApiKeyQuery) {
    this.url = environment.api_url;
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'user-key': this.query.getSnapshot().key
      })
    };
  }

  get gamesCount$(): Observable<Count> {
    return this.http.get<Count>(this.url + 'games/count', this.getOptions()).pipe(map(res => res));
  }

  getGame$(id: number): Observable<Game> {
    return this.http.get<Game>(this.url + '/games/' + id, this.getOptions()).pipe(map(res => {
      console.log(res)
      return {
        id: res[0]['id'],
        url: res[0]['url'],
        name: res[0]['name'],
        summary: res[0]['summary'] ? res[0]['summary'] : '',
        cover: res[0]['cover'] ? res['cover']['cloudinary_id'] : ''
      }
    }));
  }
}
