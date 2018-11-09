import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-thumb',
  templateUrl: './game-thumb.component.html',
  styleUrls: ['./game-thumb.component.css']
})
export class GameThumbComponent implements OnInit {

  @Input() game: Game

  constructor(private router: Router) { }

  ngOnInit() { }

  goToGame() {
    this.router.navigateByUrl('game/' + this.game.id);
  }

}
