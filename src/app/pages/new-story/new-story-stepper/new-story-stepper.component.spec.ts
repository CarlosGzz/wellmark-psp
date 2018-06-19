import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryStepperComponent } from './new-story-stepper.component';

describe('NewStoryStepperComponent', () => {
  let component: NewStoryStepperComponent;
  let fixture: ComponentFixture<NewStoryStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
