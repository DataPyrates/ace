import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStartWarpingProductionPage } from './add-start-warping-production.page';

const routes: Routes = [
  {
    path: '',
    component: AddStartWarpingProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStartWarpingProductionPageRoutingModule {}
