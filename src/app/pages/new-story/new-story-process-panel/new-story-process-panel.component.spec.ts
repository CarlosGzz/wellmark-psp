import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryProcessPanelComponent } from './new-story-process-panel.component';

describe('NewStoryProcessPanelComponent', () => {
  let component: NewStoryProcessPanelComponent;
  let fixture: ComponentFixture<NewStoryProcessPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryProcessPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryProcessPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
