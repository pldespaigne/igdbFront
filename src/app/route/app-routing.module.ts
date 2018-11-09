import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { GamePageComponent } from '../pages/game-page/game-page.component';
import { SearchComponent } from '../pages/search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game/:id', component: GamePageComponent},
  {path: 'search/:search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
