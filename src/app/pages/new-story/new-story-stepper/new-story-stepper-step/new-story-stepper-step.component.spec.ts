import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryStepperStepComponent } from './new-story-stepper-step.component';

describe('NewStoryStepperStepComponent', () => {
  let component: NewStoryStepperStepComponent;
  let fixture: ComponentFixture<NewStoryStepperStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryStepperStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryStepperStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
