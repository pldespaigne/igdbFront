import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HomeComponent } from './pages/home/home.component';
import { ApikeyComponent } from './components/apikey/apikey.component';
import { ApiKeyDialogComponent } from './pages/api-key-dialog/api-key-dialog.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { GameThumbComponent } from './components/game-thumb/game-thumb.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApikeyComponent,
    ApiKeyDialogComponent,
    GameThumbComponent,
    GamePageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ApiKeyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
