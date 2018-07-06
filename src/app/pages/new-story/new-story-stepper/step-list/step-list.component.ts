import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.css']
})
export class StepListComponent implements OnInit {
  @Input() list = [];
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() previous: EventEmitter<any> = new EventEmitter();
  @Output() next: EventEmitter<any> = new EventEmitter();
  completeStep = false;
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
    if (displayed === this.list.length) {
      this.complete.emit();
      this.completeStep = true;
    }
  }
}
