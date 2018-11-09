import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Game } from '../models/models';

export interface IgdbState {
  key: string;
  ok: boolean;
  game: Game;
  count: number;
}

export function createInitialState(): IgdbState {
  return {
    key: null,
    ok: false,
    game: null,
    count: -1
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'igdb' })
export class IgdbStore extends Store<IgdbState> {

  constructor() {
    super(createInitialState());
  }

}

