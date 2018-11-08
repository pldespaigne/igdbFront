import { Injectable } from '@angular/core';
import { ApiKeyStore } from './api-key.store';
import { Game } from '../models/models';


@Injectable({ providedIn: 'root' })
export class ApiKeyService {

  constructor(private apiKeyStore: ApiKeyStore) {
  }

  setApiKey(apikey: string) {
    if(apikey.length == 32)this.apiKeyStore.update({key: apikey, ok: true});
  }

  setGame(game: Game) {
    this.apiKeyStore.update({game: game});
  }

}
