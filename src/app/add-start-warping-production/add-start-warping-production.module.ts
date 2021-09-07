import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStartWarpingProductionPageRoutingModule } from './add-start-warping-production-routing.module';

import { AddStartWarpingProductionPage } from './add-start-warping-production.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStartWarpingProductionPageRoutingModule
  ],
  declarations: [AddStartWarpingProductionPage]
})
export class AddStartWarpingProductionPageModule {}
