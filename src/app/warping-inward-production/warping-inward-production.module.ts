import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarpingInwardProductionPageRoutingModule } from './warping-inward-production-routing.module';

import { WarpingInwardProductionPage } from './warping-inward-production.page';

import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarpingInwardProductionPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [WarpingInwardProductionPage,JwPaginationComponent]
})
export class WarpingInwardProductionPageModule {}
