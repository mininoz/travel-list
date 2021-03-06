import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Travel } from "../api.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Travel) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.data);
  }

}
