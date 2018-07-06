import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-story-panel-header',
  templateUrl: './new-story-panel-header.component.html',
  styleUrls: ['./new-story-panel-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStoryPanelHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() progress: number = 0;

  constructor() {}

  ngOnInit() {}
}
