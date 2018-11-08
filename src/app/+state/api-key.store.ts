import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Game } from '../models/models';

export interface ApiKeyState {
  key: string;
  ok: boolean;
  game: Game;
}

export function createInitialState(): ApiKeyState {
  return {
    key: null,
    ok: false,
    game: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'apiKey' })
export class ApiKeyStore extends Store<ApiKeyState> {

  constructor() {
    super(createInitialState());
  }

}

