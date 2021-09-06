import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarpingInwardProductionPage } from './warping-inward-production.page';

const routes: Routes = [
  {
    path: '',
    component: WarpingInwardProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarpingInwardProductionPageRoutingModule {}
