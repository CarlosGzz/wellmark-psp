import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { NewStoryComponent } from './new-story/new-story/new-story.component';
// import { HistoryContainerComponent } from './history/history-container/history-container.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   component: DashboardComponent,
    // },
    {
      path: 'new-story',
      component: NewStoryComponent,
    },
    {
      path: '',
      component: NewStoryComponent,
    },
    // {
    //   path: 'history',
    //   component: HistoryContainerComponent,
    // },
    {
      path: '',
      redirectTo: 'new-story',
      pathMatch: 'full',
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
