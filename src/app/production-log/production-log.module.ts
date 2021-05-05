import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionLogPageRoutingModule } from './production-log-routing.module';

import { ProductionLogPage } from './production-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionLogPageRoutingModule
  ],
  declarations: [ProductionLogPage]
})
export class ProductionLogPageModule {}
