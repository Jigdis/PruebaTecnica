import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../interfaces/confirm-dialog-data';

@Component({
  selector: 'app-confirmDialog',
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:ConfirmDialogData) { }

  ngOnInit() {
  }

}
