import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartWkProductionPage } from './start-wk-production.page';

const routes: Routes = [
  {
    path: '',
    component: StartWkProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartWkProductionPageRoutingModule {}
