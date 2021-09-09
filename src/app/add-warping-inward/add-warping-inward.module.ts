import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWarpingInwardPageRoutingModule } from './add-warping-inward-routing.module';

import { AddWarpingInwardPage } from './add-warping-inward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWarpingInwardPageRoutingModule
  ],
  declarations: [AddWarpingInwardPage]
})
export class AddWarpingInwardPageModule {}
