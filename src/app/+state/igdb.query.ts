import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IgdbStore, IgdbState } from './igdb.store';

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
}
