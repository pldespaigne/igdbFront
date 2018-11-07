import { Component, OnInit, Input } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material';

// import { ApiKeyDialogComponent } from '../../pages/api-key-dialog/api-key-dialog.component';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {

  @Input() apikey: string
  display: boolean

  constructor() { }

  ngOnInit() {
    this.display = false;
  }

  toggleDisplay() {
    this.display = !this.display;
  }
}
