import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/models';
import { ApiKeyQuery } from 'src/app/+state';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  game: Game
  routeId: number

  constructor(private route: ActivatedRoute, private query: ApiKeyQuery) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.routeId = params['id']);
    this.game = this.query.getSnapshot().game;

    if(!this.game)console.log('no game, need to query ', this.routeId)
    if(this.game && this.game.id != this.routeId)console.log('wrong game in store, need to query ', this.routeId);
    
    if(this.game && this.game.id == this.routeId)console.log(this.game);
    // else //TODO make the query
     
  }

}
