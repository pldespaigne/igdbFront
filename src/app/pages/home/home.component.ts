import { Component, OnInit, Input } from '@angular/core';

import { IgdbQuery } from 'src/app/+state/igdb.query';
import { IgdbService } from 'src/app/+state/igdb.service';
import { Observable } from 'rxjs';
// import { IgdbService } from 'src/app/+igdb/igdb.service';
import { Game } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading: boolean
  canPrevious: boolean
  canNext: boolean
  count$: Observable<number>
  game$: Observable<Game>
  search: string
  

  constructor(private query: IgdbQuery, private api: IgdbService) { }

  ngOnInit() {
    this.count$ = this.query.gamesCount$;
    this.count$.subscribe(
      count => {
        if(count == -1) this.api.gamesCount();
        else if(this.query.getSnapshot().game == null){
          let rand = Math.floor(Math.random() * count);
          this.getGame(rand);
        } else {
          this.canPrevious = true;
          this.canNext = true;
          let id = this.query.getSnapshot().game.id;
          if(id == 1) this.canPrevious = false;
          if(id == this.query.getSnapshot().count) this.canNext = false;
        }
      }
    );

    this.game$ = this.query.storedGame$;
    this.game$.subscribe(
      _ => this.isLoading = false
    );
  }

  getGame(id: number) {
    this.isLoading = true
    this.canPrevious = true;
    this.canNext = true;
    if(id == 1) this.canPrevious = false;
    if(id == this.query.getSnapshot().count) this.canNext = false;
    this.api.getGame(id);
  }
}
