import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WkProductionAddPage } from './wk-production-add.page';

const routes: Routes = [
  {
    path: '',
    component: WkProductionAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WkProductionAddPageRoutingModule {}
