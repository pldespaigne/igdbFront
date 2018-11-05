import { Component, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-api-key-dialog',
  templateUrl: './api-key-dialog.component.html',
  styleUrls: ['./api-key-dialog.component.css']
})
export class ApiKeyDialogComponent implements OnInit {

  apiKey: string

  constructor(public dialogRef: MatDialogRef<ApiKeyDialogComponent>) { }

  ngOnInit() {
    this.apiKey = '';
  }

  closeDialog(): void {
    this.dialogRef.close(this.apiKey);
  }
}
