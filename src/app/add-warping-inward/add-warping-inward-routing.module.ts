import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWarpingInwardPage } from './add-warping-inward.page';

const routes: Routes = [
  {
    path: '',
    component: AddWarpingInwardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWarpingInwardPageRoutingModule {}
