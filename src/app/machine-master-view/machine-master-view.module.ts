import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineMasterViewPageRoutingModule } from './machine-master-view-routing.module';

import { MachineMasterViewPage } from './machine-master-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineMasterViewPageRoutingModule
  ],
  declarations: [MachineMasterViewPage]
})
export class MachineMasterViewPageModule {}
