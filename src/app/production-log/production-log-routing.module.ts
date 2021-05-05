import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionLogPage } from './production-log.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionLogPageRoutingModule {}
