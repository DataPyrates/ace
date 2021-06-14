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
  sales_data: any;
  address_details: any;
  address_data: any;
  address: string;
  transport_data: any;
  branch_name: any;
  article_data: any;
  quality_data: any;
  igst: any;
  hsn: any;
  cgst: any;
  sgst: any;
  name: any;
  quality_name: any;
  currency_data: any;
  design_data: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService,public popup:PopupService
    ) { }

  ngOnInit() {
    this.order_design_master();
    this.order_currency();
    var userdata= JSON.parse(localStorage.getItem('user_data'));
    this.branch_name = userdata.data.branches[0]['short_name'];
  }
  order_design_master() {
    this.api.order_design_master_data().subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          // this.inward_production_data = data['data']['results'];
        }
      })
  }

  order_currency() {
    this.api.order_currency_data().subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
            this.currency_data = data['data']['results'][0]['symbol']+' - '+data['data']['results'][0]['name'];
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
salesuserdata(event){
  if(event && event.target.value){
  this.api.order_sales_data(event.target.value).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
         this.sales_data = data['data']['results'];
         console.log(this.sales_data);
      }
    })
}
}
address_delivery(event){
  if(event && event.target.value){
  this.api.order_address_data(event.target.value).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
         this.address_data = data['data']['results'];
         console.log(this.address_data);
      }
    })
}
}
transport(event){
  if(event && event.target.value){
  this.api.order_transport_data(event.target.value).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
         this.transport_data = data['data']['results'];
         console.log(this.transport_data);
      }
    })
}
}
article(event){
  if(event && event.target.value){
  this.api.order_article_data(event.target.value).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
         this.article_data = data['data']['results'];
         console.log(this.article_data);
      }
    })
}
}

quality(event){
  if(event && event.target.value){
  this.api.order_quality_data(event.target.value).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
         this.quality_data = data['data']['results'];
         console.log(this.quality_data);
      }
    })
}
}
article_details(event){
  if(event && event.target.value){
  this.api.order_article_details_data(event.target.value).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
         this.hsn = data['data']['hsn_info']['hsn_code'];
         this.igst = data['data']['hsn_info']['igst'];
         this.cgst = data['data']['hsn_info']['cgst'];
         this.sgst = data['data']['hsn_info']['sgst'];
         this.name = data['data']['name'];
         this.quality_name = data['data']['quality_name'];
         
      }
    })
}
}

// design(event){
//   if(event && event.target.value){
//   this.api.order_design_data(event.target.value).subscribe(
//     (data: any) => {
//       if ((data['status'] == 200)) {
//          this.design_data = data['data']['results'];
//          console.log(this.design_data);
//       }
//     })
// }
// }

}
