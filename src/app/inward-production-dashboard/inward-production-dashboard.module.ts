import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InwardProductionDashboardPageRoutingModule } from './inward-production-dashboard-routing.module';

import { InwardProductionDashboardPage } from './inward-production-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InwardProductionDashboardPageRoutingModule
  ],
  declarations: [InwardProductionDashboardPage]
})
export class InwardProductionDashboardPageModule {}
