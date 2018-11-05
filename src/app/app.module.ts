import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ApikeyComponent } from './components/apikey/apikey.component';
import { ApiKeyDialogComponent } from './components/api-key-dialog/api-key-dialog.component';

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
    FormsModule
  ],
  entryComponents: [
    ApiKeyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
