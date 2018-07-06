import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-estimation',
  templateUrl: './step-estimation.component.html',
  styleUrls: ['./step-estimation.component.css']
})
export class StepEstimationComponent implements OnInit {
  @Input() list = [];
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() previous: EventEmitter<any> = new EventEmitter();
  @Output() next: EventEmitter<any> = new EventEmitter();
  completeStep = false;
  estimation = null;
  constructor() {}

  ngOnInit() {}

  displayNext() {
    this.list.some((item, index) => {
      if (item.display === false) {
        item.display = true;
        return true;
      }
    });
    this.checkStepCompleted();
  }

  checkStepCompleted() {
    const displayed = this.list.filter( item => item.display === true).length;
    if (displayed === this.list.length && this.estimation) {
      this.complete.emit();
      this.completeStep = true;
    }
  }

}
