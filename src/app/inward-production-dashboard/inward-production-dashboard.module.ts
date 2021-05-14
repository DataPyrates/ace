import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InwardProductionDashboardPageRoutingModule } from './inward-production-dashboard-routing.module';

import { InwardProductionDashboardPage } from './inward-production-dashboard.page';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InwardProductionDashboardPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [InwardProductionDashboardPage,JwPaginationComponent,]
})
export class InwardProductionDashboardPageModule {}
