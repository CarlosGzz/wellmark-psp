import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NewStoryModule } from './new-story/new-story.module';
import { MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatMenuModule, MatExpansionPanel } from '@angular/material';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';

const IMPORTS = [ThemeModule, PagesRoutingModule, NewStoryModule];
const MATERIAL_MODULES = [MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule];
const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  HistoryComponent,
];

@NgModule({
  imports: [...IMPORTS, ...MATERIAL_MODULES],
  declarations: [...PAGES_COMPONENTS]
})
export class PagesModule {}
