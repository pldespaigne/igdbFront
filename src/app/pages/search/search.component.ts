import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IgdbService } from 'src/app/+state';
import { Observable } from 'rxjs';
import { Game, log } from 'src/app/models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string
  searchInput: string
  search$: Observable<number[]>
  games: Game[]
  offset: number
  isLoading: boolean
  canPrevious: boolean
  canNext: boolean

  constructor(private route: ActivatedRoute, private api: IgdbService) { }

  ngOnInit() {
    this.isLoading = true;
    this.canPrevious = false;
    this.canNext = false;
    this.offset = 0;
    this.route.params.subscribe(params => {
      this.search = params['search'];
      this.getSearch(this.search, this.offset);
    });
  }

  getSearch(search: string, offset: number){
    log('searching ' + search + '...')
    this.isLoading = true;
    this.canPrevious = true;
    this.canNext = true;
    if(offset <= 0) {
      offset = 1;
      this.canPrevious = false;
    } else if (offset > 10000) {
      offset = 10000;
      this.canNext = false;
    }
    this.offset = offset;
    this.search = search;
    this.games = [];
    this.search$ = this.api.getSearch$(search, offset);
    this.search$.subscribe(
      searchResult => searchResult.forEach(
        id => this.api.getGame$(id).subscribe(
          game => {
            this.games.push(game);
            this.isLoading = false;
          },
          err => log(err, 1, 'err'),
          // () => this.isLoading = false
        )
      ),
      err => log(err, 1, 'err')
    );
  }

}
