import { Component, OnInit, Input } from '@angular/core';

import { ApiKeyQuery } from 'src/app/+state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // hasApiKey: boolean
  @Input() apikey: string

  constructor(private query: ApiKeyQuery) { }

  ngOnInit() {

    // this.hasApiKey = false;

    // const apiKeyObserver = {
    //   next: (apiKey) => this.check(apiKey.key),
    //   error: (err) => console.error('api key error : ', err),
    //   complete: () => console.log('api key observer complete !')
    // };
    // this.apiKeyQuery.select().subscribe(apiKeyObserver);
  }

  // check(apiKey: string) {

  //   if(apiKey.length == 0) {
  //     console.error('No API key !');
  //     this.hasApiKey = false;

  //   } else if (apiKey.length != 32) {
  //     this.hasApiKey = false;

  //   } else {
  //     this.hasApiKey = true;
  //     this.apiKey = apiKey;
  //   }
  // }

}
