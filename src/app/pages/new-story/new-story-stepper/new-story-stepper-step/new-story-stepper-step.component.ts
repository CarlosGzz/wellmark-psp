import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-new-story-stepper-step',
  templateUrl: './new-story-stepper-step.component.html',
  styleUrls: ['./new-story-stepper-step.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStoryStepperStepComponent implements OnInit {
  @Input() type: string;
  @Input() stepData: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() previous: EventEmitter<any> = new EventEmitter();
  @Output() next: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
