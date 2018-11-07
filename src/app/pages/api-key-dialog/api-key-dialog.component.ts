import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-api-key-dialog',
  templateUrl: './api-key-dialog.component.html',
  styleUrls: ['./api-key-dialog.component.css']
})
export class ApiKeyDialogComponent implements OnInit {

  apikey: string

  constructor(public dialogRef: MatDialogRef<ApiKeyDialogComponent>) { }

  ngOnInit() {
    this.apikey = '';
  }

  closeDialog(): void {
    if(this.apikey.length == 32) {
      console.log(this.apikey);
      this.dialogRef.close(this.apikey);
    }
  }
}
