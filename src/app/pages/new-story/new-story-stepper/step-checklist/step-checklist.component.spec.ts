import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepChecklistComponent } from './step-checklist.component';

describe('StepChecklistComponent', () => {
  let component: StepChecklistComponent;
  let fixture: ComponentFixture<StepChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
