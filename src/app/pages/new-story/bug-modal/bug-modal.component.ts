import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bug-modal',
  templateUrl: './bug-modal.component.html',
  styleUrls: ['./bug-modal.component.css']
})
export class BugModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<BugModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
