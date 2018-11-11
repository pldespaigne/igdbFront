import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IgdbStore } from './igdb.store';
import { IgdbQuery } from './igdb.query';
import { Game, resolvePlatforms, log } from '../models/models';
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
    log('setting apikey : ' + apikey);
    if(apikey.length == 32)this.store.update({key: apikey, ok: true});
  }

  setGame(game: Game) {
    log('setting home game : ' + game.id);
    this.store.update({game: game});
  }

  addGame(game: Game) {
    log('adding game ' + game.id + ' to the store');
    this.store.update(state => ({
      games: [
        ...state.games,
        game
      ]
    }))
  }

  setCount(count: number) {
    log('setting count : ' + count);
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

  gamesCount() {
    let query = this.url + 'games/count';
    log('GET ' + query + ' ...');
    this.http.get(query, this.getOptions()).subscribe(
      count => {
        log('...' + count, 1);
        this.setCount(count['count']);
      }
    );
  }

  getGame(id: number) {
    this.getGame$(id).subscribe(
      game => {
        this.setGame(game);
      }
    );
  }

  getSearch$(search: string, offset: number): Observable<number[]> {
    let query = this.url + '/games/?search=' + search + '&offset=' + offset + '&limit=3';
    log('GET ' + query + ' ...');
    return this.http.get<Object[]>(query, this.getOptions()).pipe(
      map(
        res => {
          log('...' + JSON.stringify(res), 1);
          let ids: number[];
          ids = res.map(res => res['id']);
          return ids;
        }
      )
    );
  }

  getGame$(id: number): Observable<Game> {
    log('looking if game ' + id + ' is already in the store ...');
    if(this.query.containsGame(id)) {
      log('...Yes : Retreiving game from store.', 1)
      return this.query.getGameFromGames$(id);
    } else {
      log('...No : Need to query the API.', 1)
      let query = this.url + '/games/' + id;
      log('GET ' + query + ' ...');
      return this.http.get<Game>(query, this.getOptions()).pipe(
        map(
          res => {
            if(!res[0]) {
              log('This game doesn\'t esxist anymore : ' + JSON.stringify(res), 0, 'err');
              return {
                id: 0,
                url: '',
                name: 'Error : this game doesn\'t exist anymore 😥',
                summary: 'Error : this game doesn\'t exist anymore 😥',
                cover: 'https://cdn4.iconfinder.com/data/icons/flatified/512/photos.png',
                platforms: []
              };
            }
            let game: Game;
            let coverUrl = 'https://cdn4.iconfinder.com/data/icons/flatified/512/photos.png';
            if (res[0]['cover']) coverUrl = 'https://images.igdb.com/igdb/image/upload/t_720p/' + res[0]['cover']['cloudinary_id'] + '.jpg';
            let platforms: string [];
            platforms = [];
            if(res[0]['platforms']) platforms = resolvePlatforms(res[0]['platforms']);
            game = {
              id: res[0]['id'],
              url: res[0]['url'],
              name: res[0]['name'],
              summary: res[0]['summary'] ? res[0]['summary'] : 'No summary available.',
              cover: coverUrl,
              platforms: platforms
            };
            log('...'+ game.id, 1);
            this.addGame(game);
            return game;
          }
        )
      );
    }
  }

}
