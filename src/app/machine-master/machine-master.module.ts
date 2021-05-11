import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineMasterPageRoutingModule } from './machine-master-routing.module';

import { MachineMasterPage } from './machine-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineMasterPageRoutingModule
  ],
  declarations: [MachineMasterPage]
})
export class MachineMasterPageModule {}
