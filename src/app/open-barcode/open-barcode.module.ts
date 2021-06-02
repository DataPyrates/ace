import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenBarcodePageRoutingModule } from './open-barcode-routing.module';

import { OpenBarcodePage } from './open-barcode.page';

// import { NgxBarcodeModule } from 'ngx-barcode';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenBarcodePageRoutingModule,
    QRCodeModule
    // NgxBarcodeModule

  ],
  declarations: [OpenBarcodePage]
})
export class OpenBarcodePageModule {}
