import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewStoryComponent } from './new-story/new-story.component';
import { ThemeModule } from '../../@theme/theme.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material';
import { NewStoryPanelHeaderComponent } from './new-story-panel-header/new-story-panel-header.component';
import { NewStoryStepperComponent } from './new-story-stepper/new-story-stepper.component';
import { NewStoryStepperStepComponent } from './new-story-stepper/new-story-stepper-step/new-story-stepper-step.component';
import { StepListComponent } from './new-story-stepper/step-list/step-list.component';
import { StepChecklistComponent } from './new-story-stepper/step-checklist/step-checklist.component';
import { StepEstimationComponent } from './new-story-stepper/step-estimation/step-estimation.component';
import { StepReviewComponent } from './new-story-stepper/step-review/step-review.component';
import { NewStoryProcessPanelComponent } from './new-story-process-panel/new-story-process-panel.component';

const IMPORTS = [ThemeModule, CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES = [
  MatExpansionModule,
  MatStepperModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatDialogModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatToolbarModule
];
const NEW_STORY_COMPONENTS = [
  NewStoryComponent,
  NewStoryProcessPanelComponent,
  NewStoryPanelHeaderComponent,
  NewStoryStepperComponent,
  NewStoryStepperStepComponent,
  StepListComponent,
  StepChecklistComponent,
  StepEstimationComponent,
  StepReviewComponent
];

@NgModule({
  imports: [...IMPORTS, ...MATERIAL_MODULES],
  declarations: [...NEW_STORY_COMPONENTS]
})
export class NewStoryModule {}
