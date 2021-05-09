import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InwardProductionDashboardPage } from './inward-production-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: InwardProductionDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InwardProductionDashboardPageRoutingModule {}
