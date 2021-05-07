import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInwardProductionPage } from './add-inward-production.page';

const routes: Routes = [
  {
    path: '',
    component: AddInwardProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInwardProductionPageRoutingModule {}
