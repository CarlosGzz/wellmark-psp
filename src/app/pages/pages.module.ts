import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NewStoryModule } from './new-story/new-story.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const PAGES_COMPONENTS = [PagesComponent];

const IMPORTS = [ThemeModule, PagesRoutingModule, NewStoryModule];

@NgModule({
  imports: [...IMPORTS],
  declarations: [...PAGES_COMPONENTS, DashboardComponent]
})
export class PagesModule {}
