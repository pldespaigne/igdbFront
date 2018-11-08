import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ApiKeyState {
  key: string;
  ok: boolean;
}

export function createInitialState(): ApiKeyState {
  return {
    key: null,
    ok: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'apiKey' })
export class ApiKeyStore extends Store<ApiKeyState> {

  constructor() {
    super(createInitialState());
  }

}

