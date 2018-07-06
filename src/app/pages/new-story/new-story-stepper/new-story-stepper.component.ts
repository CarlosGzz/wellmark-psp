import { MatHorizontalStepper } from '@angular/material';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-story-stepper',
  templateUrl: './new-story-stepper.component.html',
  styleUrls: ['./new-story-stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStoryStepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  step = 0;
  @Input() subProcess: any;
  @Output() steperComplete: EventEmitter<any> = new EventEmitter();
  stepsCompleted = [false, false, false];

  constructor() {}

  ngOnInit() {
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

  complete(step) {
    this.subProcess[step].status = true;
    this.stepsCompleted[step] = true;
  }

  next(i) {
    if (i >= this.subProcess.length - 1) {
      this.steperComplete.emit();
    }
    this.stepper.next();
  }
}
