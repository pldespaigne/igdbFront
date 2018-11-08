import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HomeComponent } from './pages/home/home.component';
import { ApikeyComponent } from './components/apikey/apikey.component';
import { ApiKeyDialogComponent } from './pages/api-key-dialog/api-key-dialog.component';
import { IgdbService } from './+igdb/igdb.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApikeyComponent,
    ApiKeyDialogComponent
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
  providers: [IgdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
