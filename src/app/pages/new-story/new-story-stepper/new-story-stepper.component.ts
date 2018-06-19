import { MatHorizontalStepper } from '@angular/material';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-new-story-stepper',
  templateUrl: './new-story-stepper.component.html',
  styleUrls: ['./new-story-stepper.component.css']
})
export class NewStoryStepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  step = 0;
  @Input() steps: any = [];
  stepsCompleted = [false, false, false];

  constructor() { }

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
    this.stepsCompleted[step] = true;
  }

  next() {
    this.stepper.next();
  }
}
