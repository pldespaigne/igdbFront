import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IgdbStore } from './igdb.store';
import { IgdbQuery } from './igdb.query';
import { Game } from '../models/models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class IgdbService {

  url: string

  constructor(private store: IgdbStore, private http: HttpClient, private query: IgdbQuery) {
    this.url = environment.api_url;
  }

  setApikey(apikey: string) {
    console.log('setting apikey', apikey);
    if(apikey.length == 32)this.store.update({key: apikey, ok: true});
  }

  setGame(game: Game) {
    console.log('setting game', game);
    this.store.update({game: game});
  }

  setCount(count: number) {
    console.log('setting count', count);
    this.store.update({count: count});
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'user-key': this.query.getSnapshot().key
      })
    };
  }

  private resolvePlatforms(platforms: number[]): string[]{
    let res: string[]
    res = [];
    for(let id of platforms) {
      switch(id) {
        case 4:
          res.push('Nintendo 64');
          break;
        case 5:
          res.push('Wii');
          break;
        case 6:
          res.push('PC');
          break;
        case 7:
          res.push('Play Station');
          break;
        case 8:
          res.push('PS 2');
          break;
        case 9:
          res.push('PS 3');
          break;
        case 11:
          res.push('XBox');
          break;
        case 12:
          res.push('XBox 360');
          break;
        case 18:
          res.push('NES');
          break;
        case 19:
          res.push('Super NES');
          break;
        case 20:
          res.push('Nintendo DS');
          break;
        case 21:
          res.push('Game Cube');
          break;
        case 22:
          res.push('Game Boy Color');
          break;
        case 24:
          res.push('Game Boy Advance');
          break;
        case 33:
          res.push('Game Boy');
          break;
        case 34:
          res.push('Android');
          break;
        case 37:
          res.push('Nintendo 3DS');
          break;
        case 38:
          res.push('PSP');
          break;
        case 39:
          res.push('iOS');
          break;
        case 41:
          res.push('Wii U');
          break;
        case 46:
          res.push('PS Vita');
          break;
        case 48:
          res.push('PS 4');
          break;
        case 49:
          res.push('XBox One');
          break;
        case 130:
          res.push('Nintendo Switch');
          break;
      }
    }
    return res;
  }

  gamesCount() {
    console.log('GET /games/count ...');
    this.http.get(this.url + 'games/count', this.getOptions()).subscribe(
      count => {
        console.log('...', count);
        this.setCount(count['count']);
      }
    );
  }

  getGame(id: number) {
    console.log('GET /games/' + id + ' ...');
    this.http.get<Game>(this.url + '/games/' + id, this.getOptions()).subscribe(
      res => {
        let game: Game;
        let coverUrl = 'https://cdn4.iconfinder.com/data/icons/flatified/512/photos.png';
        if (res[0]['cover']) coverUrl = 'https://images.igdb.com/igdb/image/upload/t_720p/' + res[0]['cover']['cloudinary_id'] + '.jpg';
        let platforms: string [];
        platforms = [];
        if(res[0]['platforms']) platforms = this.resolvePlatforms(res[0]['platforms']);
        game = {
          id: res[0]['id'],
          url: res[0]['url'],
          name: res[0]['name'],
          summary: res[0]['summary'] ? res[0]['summary'] : 'No summary available.',
          cover: coverUrl,
          platforms: platforms
        };
        // console.log('...', game);
        this.setGame(game);
      }
    );
  }

  getSearch$(search: string, offset: number): Observable<number[]> {
    console.log('GET /games/?search=' + search + '&offset=' + offset + '&limit=3 ...');
    return this.http.get<Object[]>(this.url + '/games/?search=' + search + '&offset=' + offset + '&limit=3', this.getOptions()).pipe(
      map(
        res => {
          console.log('...', res);
          let ids: number[];
          ids = res.map(res => res['id']);
          return ids;
        }
      )
    );
  }

  getGame$(id: number): Observable<Game> {
    console.log('GET /games/' + id + ' ...');
    return this.http.get<Game>(this.url + '/games/' + id, this.getOptions()).pipe(
      map(
        res => {
          let game: Game;
          let coverUrl = 'https://cdn4.iconfinder.com/data/icons/flatified/512/photos.png';
          if (res[0]['cover']) coverUrl = 'https://images.igdb.com/igdb/image/upload/t_720p/' + res[0]['cover']['cloudinary_id'] + '.jpg';
          let platforms: string [];
        platforms = [];
        if(res[0]['platforms']) platforms = this.resolvePlatforms(res[0]['platforms']);
          game = {
            id: res[0]['id'],
            url: res[0]['url'],
            name: res[0]['name'],
            summary: res[0]['summary'] ? res[0]['summary'] : 'No summary available.',
            cover: coverUrl,
            platforms: platforms
          };
          console.log('...', game);
          return game;
        }
      )
    );
  }

}
