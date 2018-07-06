import { Process, SubProcess } from './../new-story/process';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-story-process-panel',
  templateUrl: './new-story-process-panel.component.html',
  styleUrls: ['./new-story-process-panel.component.css']
})
export class NewStoryProcessPanelComponent implements OnInit {
  @Input() process = {};
  step = 0;
  completion = false;

  constructor() {}

  ngOnInit() {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  get progressValue() {
    if (this.process['subProcess']) {
      return (this.process['subProcess'].filter(subProcess => subProcess.status === true).length / this.process['subProcess'].length) * 100;
    }
    return 0;
  }
}
