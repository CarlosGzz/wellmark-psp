import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryPanelHeaderComponent } from './new-story-panel-header.component';

describe('NewStoryPanelHeaderComponent', () => {
  let component: NewStoryPanelHeaderComponent;
  let fixture: ComponentFixture<NewStoryPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
