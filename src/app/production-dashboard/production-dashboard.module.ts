import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionDashboardPageRoutingModule } from './production-dashboard-routing.module';

import { ProductionDashboardPage } from './production-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionDashboardPageRoutingModule
  ],
  declarations: [ProductionDashboardPage]
})
export class ProductionDashboardPageModule {}
