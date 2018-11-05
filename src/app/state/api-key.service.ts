import { Injectable } from '@angular/core';
import { ApiKeyStore } from './api-key.store';

@Injectable({ providedIn: 'root' })
export class ApiKeyService {

  constructor(private apiKeyStore: ApiKeyStore) {
  }

  // get(): string {
  //   return localStorage.getItem('apiKey')
  // }

  refresh() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.apiKeyStore.set(entities);
    // });
    this.apiKeyStore.update({key: localStorage.getItem('apiKey')});
  }

  set(newApiKey: string) {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.apiKeyStore.add(entity);
    // });
    localStorage.setItem('apiKey', newApiKey);
    this.refresh();
  }

}
