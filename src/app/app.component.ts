import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IgdbQuery } from './+state/igdb.query';
import { IgdbService } from './+state/igdb.service';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ApiKeyDialogComponent } from './pages/api-key-dialog/api-key-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apikey$: Observable<string>
  isApiok$: Observable<boolean>

  constructor(private query: IgdbQuery, private service: IgdbService, private dialog: MatDialog) {}

  ngOnInit() {
    this.apikey$ = this.query.apikey$;
    this.isApiok$ = this.query.isApiok$;
    // this.isApiok$.subscribe(
    //   (isOk) => {
    //     if(isOk){
    //       this.getGamesCount();
    //     }
    //   }
    // );
    if(this.query.getSnapshot().key === null) this.openApiKeyDialog()
  }

  openApiKeyDialog() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(ApiKeyDialogComponent, {
        width: '250px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed :', result);
        if(result != undefined) {
          this.service.setApikey(result);
        }
      });
    })
  }
}
