import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartWkProductionPageRoutingModule } from './start-wk-production-routing.module';

import { StartWkProductionPage } from './start-wk-production.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartWkProductionPageRoutingModule
  ],
  declarations: [StartWkProductionPage]
})
export class StartWkProductionPageModule {}
