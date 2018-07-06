import { BugModalComponent } from './../bug-modal/bug-modal.component';
import { NewStoryService } from './new-story.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper, MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.scss']
})
export class NewStoryComponent implements OnInit {
  step = 0;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, public newStoryService: NewStoryService) {}

  ngOnInit() {
    this.newStoryService.planningProcess$.subscribe(data => {
      console.log(data);
    });

    this.newStoryService.developmentProcess$.subscribe(data => {
      console.log(data);
    });

    this.newStoryService.postmortemProcess$.subscribe(data => {
      console.log(data);
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BugModalComponent, {
      width: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
