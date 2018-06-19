import { MatHorizontalStepper } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-story-process-panel',
  templateUrl: './new-story-process-panel.component.html',
  styleUrls: ['./new-story-process-panel.component.css']
})
export class NewStoryProcessPanelComponent implements OnInit {
  @ViewChild('stepper1') stepper1: MatHorizontalStepper;
  @ViewChild('stepper2') stepper2: MatHorizontalStepper;
  @ViewChild('stepper3') stepper3: MatHorizontalStepper;
  step = 0;
  step1Completed = false;
  step2Completed = false;

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

  complete() {
    this.step1Completed = true;
  }

  next() {
    this.stepper1.next();
  }

}
