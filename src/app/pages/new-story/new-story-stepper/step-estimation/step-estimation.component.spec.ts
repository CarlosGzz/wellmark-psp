import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEstimationComponent } from './step-estimation.component';

describe('StepEstimationComponent', () => {
  let component: StepEstimationComponent;
  let fixture: ComponentFixture<StepEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
