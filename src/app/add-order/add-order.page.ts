import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {PopupService} from '../../app/popup.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})
export class AddOrderPage implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService,public popup:PopupService
    ) { }

  ngOnInit() {
    this.order_design_master();
    this.order_currency();
  }
  order_design_master() {
    this.api.order_design_master_data().subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          // this.inward_production_data = data['data']['results'];
          // this.greige_article_name = data['data']['results'][0]['greige_article_name'];
          // this.greige_production_transaction_number = data['data']['results'][0]['greige_production_transaction_number'];
          // this.greige_color_name = data['data']['results'][0]['production_order_info']['greige_color_name'];
          // this.quantity = data['data']['results'][0]['production_order_info']['quantity'];
          // this.operator_name = localStorage.getItem('username');
          // this.width_A = data['data']['results'][0]['width_A'];
          // this.width_B = data['data']['results'][0]['width_B'];
          // this.start_meter_A = data['data']['results'][0]['taakas_start_meter']['start_meter_A'];
          // this.start_meter_B = data['data']['results'][0]['taakas_start_meter']['start_meter_B'];
        }
      })
  }

  order_currency() {
    this.api.order_currency_data().subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          // this.inward_production_data = data['data']['results'];
          // this.greige_article_name = data['data']['results'][0]['greige_article_name'];
          // this.greige_production_transaction_number = data['data']['results'][0]['greige_production_transaction_number'];
          // this.greige_color_name = data['data']['results'][0]['production_order_info']['greige_color_name'];
          // this.quantity = data['data']['results'][0]['production_order_info']['quantity'];
          // this.operator_name = localStorage.getItem('username');
          // this.width_A = data['data']['results'][0]['width_A'];
          // this.width_B = data['data']['results'][0]['width_B'];
          // this.start_meter_A = data['data']['results'][0]['taakas_start_meter']['start_meter_A'];
          // this.start_meter_B = data['data']['results'][0]['taakas_start_meter']['start_meter_B'];
        }
      })
  }
}
