import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineMasterPage } from './machine-master.page';

const routes: Routes = [
  {
    path: '',
    component: MachineMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineMasterPageRoutingModule {}
