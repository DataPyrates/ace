import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInwardProductionPageRoutingModule } from './add-inward-production-routing.module';

import { AddInwardProductionPage } from './add-inward-production.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInwardProductionPageRoutingModule
  ],
  declarations: [AddInwardProductionPage]
})
export class AddInwardProductionPageModule {}
