import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashscreenPage } from './flashscreen.page';

const routes: Routes = [
  {
    path: '',
    component: FlashscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashscreenPageRoutingModule {}
