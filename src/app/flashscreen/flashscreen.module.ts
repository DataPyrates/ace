import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashscreenPageRoutingModule } from './flashscreen-routing.module';

import { FlashscreenPage } from './flashscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashscreenPageRoutingModule
  ],
  declarations: [FlashscreenPage]
})
export class FlashscreenPageModule {}
