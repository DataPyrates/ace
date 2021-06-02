import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInwardProductionPageRoutingModule } from './add-inward-production-routing.module';

import { AddInwardProductionPage } from './add-inward-production.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    AddInwardProductionPageRoutingModule
  ],
  declarations: [AddInwardProductionPage]
})
export class AddInwardProductionPageModule {}
