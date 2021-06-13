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
  client_data: any;
  gst_number: any;
  address: string;

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
  getclientdata(event){
    if(event && event.target.value){
    this.api.order_client_data(event.target.value).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
           this.client_data = data['data']['results'];
           console.log(this.client_data);
        }
      })
  }
}
client_details(event){
  console.log(event.target.value);
  for(let i=0;i<this.client_data.length;i++){
    if(event.target.value == this.client_data[i]['name']){
      this.gst_number = this.client_data[i]['gst_number'];
      this.address = this.client_data[i]['address1']+' '+this.client_data[i]['address2']+' '+this.client_data[i]['pincode']+' '+this.client_data[i]['city_name'];
    }
  }
}
}
