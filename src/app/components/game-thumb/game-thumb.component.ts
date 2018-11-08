import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-thumb',
  templateUrl: './game-thumb.component.html',
  styleUrls: ['./game-thumb.component.css']
})
export class GameThumbComponent implements OnInit {

  @Input() set game(game: Game) {
    if(game.cover !== '') this.imageUrl = 'https://images.igdb.com/igdb/image/upload/t_720p/' + game.cover + '.jpg';
    else this.imageUrl = 'https://cdn4.iconfinder.com/data/icons/flatified/512/photos.png';

    this.gameObj = game;
  }
  imageUrl: string
  gameObj: Game

  constructor(private router: Router) { }

  ngOnInit() { }

  goToGame() {
    this.router.navigateByUrl('game/' + this.gameObj.id);
  }

}
