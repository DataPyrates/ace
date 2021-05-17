import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenBarcodePage } from './open-barcode.page';

const routes: Routes = [
  {
    path: '',
    component: OpenBarcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenBarcodePageRoutingModule {}
