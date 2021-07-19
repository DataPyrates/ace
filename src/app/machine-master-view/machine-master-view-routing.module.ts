import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineMasterViewPage } from './machine-master-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineMasterViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineMasterViewPageRoutingModule {}
