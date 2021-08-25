import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WkProductionAddPageRoutingModule } from './wk-production-add-routing.module';

import { WkProductionAddPage } from './wk-production-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WkProductionAddPageRoutingModule
  ],
  declarations: [WkProductionAddPage]
})
export class WkProductionAddPageModule {}
