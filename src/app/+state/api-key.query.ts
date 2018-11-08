import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ApiKeyStore, ApiKeyState } from './api-key.store';

@Injectable({ providedIn: 'root' })
export class ApiKeyQuery extends Query<ApiKeyState> {

  constructor(protected store: ApiKeyStore) {
    super(store);
  }


  get apikey$() {
    return this.select(store => store.key);
  }

  get isApiok$() {
    return this.select(store => store.ok);
  }
}
