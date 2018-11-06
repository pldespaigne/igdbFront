import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ApiKeyQuery, ApiKeyService } from 'src/app/state';
import { ApiKeyDialogComponent } from '../api-key-dialog/api-key-dialog.component';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {

  hasApiKey: boolean
  errorMessage: string
  apiKey: string

  constructor(private apiKeyQuery: ApiKeyQuery, private apiKeyService: ApiKeyService, public dialog: MatDialog) { }

  ngOnInit() {

    this.hasApiKey = false;

    const apiKeyObserver = {
      next: (apiKey) => this.check(apiKey.key),
      error: (err) => console.error('api key error : ', err),
      complete: () => console.log('api key observer complete !')
    };
    this.apiKeyQuery.select().subscribe(apiKeyObserver);
  }

  check(apiKey: string) {

    if(apiKey.length == 0) {
      console.error('No API key !');
      this.hasApiKey = false;
      this.errorMessage = 'No API Key';
      // this.openApiKeyDialog();

    } else if (apiKey.length != 32) {
      console.error('Invalid API Key !');
      this.hasApiKey = false;
      this.errorMessage = 'Invalid API Key';

    } else {
      this.hasApiKey = true;
      this.errorMessage = '';
      this.apiKey = apiKey;
    }
  }

  openApiKeyDialog() {
    const dialogRef = this.dialog.open(ApiKeyDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed :', result);
      if(result != undefined) {
        this.apiKeyService.set(result);
      }
    });
  }

}
