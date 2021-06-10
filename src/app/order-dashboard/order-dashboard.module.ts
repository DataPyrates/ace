import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDashboardPageRoutingModule } from './order-dashboard-routing.module';

import { OrderDashboardPage } from './order-dashboard.page';

import {NgxPaginationModule} from 'ngx-pagination';

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDashboardPageRoutingModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  declarations: [OrderDashboardPage]
})
export class OrderDashboardPageModule {}
