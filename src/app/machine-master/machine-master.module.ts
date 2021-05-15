import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineMasterPageRoutingModule } from './machine-master-routing.module';

import { MachineMasterPage } from './machine-master.page';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineMasterPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [MachineMasterPage]
})
export class MachineMasterPageModule {}
