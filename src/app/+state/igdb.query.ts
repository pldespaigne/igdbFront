import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IgdbStore, IgdbState } from './igdb.store';
import { Game } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IgdbQuery extends Query<IgdbState> {

  constructor(protected store: IgdbStore) {
    super(store);
  }


  get apikey$() {
    return this.select(store => store.key);
  }

  get isApiok$() {
    return this.select(store => store.ok);
  }

  get storedGame$() {
    return this.select(store => store.game);
  }

  get gamesCount$() {
    return this.select(store => store.count);
  }

  getGameFromGames$(id: number): Observable<Game> {
    let games = this.getSnapshot().games;
    for(let i = 0 ; i < games.length ; i++){
      if(games[i].id == id) return this.select(store => store.games[i]);
    }
    return null;
  }

  containsGame(id: number): boolean {
    for(let game of this.getSnapshot().games){
      if(id == game.id) return true;
    }
    return false;
  }
}
