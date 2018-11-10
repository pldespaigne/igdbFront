import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game, log } from 'src/app/models/models';
import { IgdbQuery } from 'src/app/+state/igdb.query';
import { ActivatedRoute } from '@angular/router';
import { IgdbService } from 'src/app/+state';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  game: Game
  routeId: number
  isLoading: boolean

  constructor(private route: ActivatedRoute, private query: IgdbQuery, private api: IgdbService) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => this.routeId = params['id']);
    this.game = this.query.getSnapshot().game;

    if(!this.game){
      log('no game, need to query '+ this.routeId)
      this.loadGame();
    } else if(this.game && this.game.id != this.routeId){
      log('wrong game in store, need to query '+ this.routeId);
      this.loadGame();
    } else if(this.game && this.game.id == this.routeId){
      log('' + this.game.id);
      this.isLoading = false;
    }
  }

  loadGame() {
    this.isLoading = true;
    // this.api.getGame(this.routeId);
    // this.query.storedGame$.subscribe(
    //   game => {
    //     this.game = game
    //     if(game.id == this.routeId)this.isLoading = false
    //   }
    // )
    this.api.getGame$(this.routeId).subscribe(
      game => {
        this.game = game
        if(game.id == this.routeId)this.isLoading = false
      }
    )
  }
}
