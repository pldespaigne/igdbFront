import { Component, OnInit, Input } from '@angular/core';

import { ApiKeyQuery } from 'src/app/+state';
import { Observable } from 'rxjs';
import { IgdbService } from 'src/app/+igdb/igdb.service';
import { Count, Game } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isApiok$: Observable<boolean>
  isLoading: boolean
  count: number
  game: Game
  

  constructor(private query: ApiKeyQuery, private api: IgdbService) { }

  ngOnInit() {
    this.isLoading = true;
    // this.apikey$ = this.query.apikey$;
    this.isApiok$ = this.query.isApiok$;
    this.isApiok$.subscribe(
      (isOk) => {
        if(isOk){
          this.getGamesCount();
        }
      }
    );
  }

  getGamesCount() {
    this.api.gamesCount$.subscribe(
      (count: Count) => {
        // console.log(data)
        // this.isLoading = false;
        this.count = count.count;
        this.api.getGame$(Math.floor(Math.random() * this.count)).subscribe((game: Game) => {
          this.isLoading = false;
          this.game = game;
          console.log(game);
          console.log(game.id);
          console.log(game.name);
          // console.log(game.cover);
        });
      },
      (err) => console.error(err)
    );
  }

}
