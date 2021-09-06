import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartWarpingProductionPageRoutingModule } from './start-warping-production-routing.module';

import { StartWarpingProductionPage } from './start-warping-production.page';

import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartWarpingProductionPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [StartWarpingProductionPage,JwPaginationComponent]
})
export class StartWarpingProductionPageModule {}
