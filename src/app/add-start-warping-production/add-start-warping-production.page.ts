import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { WarpingService } from './../warping.service';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';
import copy from 'text-copy';
import { PopupService } from './../popup.service';

@Component({
  selector: 'app-add-start-warping-production',
  templateUrl: './add-start-warping-production.page.html',
  styleUrls: ['./add-start-warping-production.page.scss'],
})
export class AddStartWarpingProductionPage implements OnInit {
  wrap_data: any;
  wrap_data_flag: boolean = true;
  transaction_number: any;
  machine_number: any;
  yarn_article_name: any;
  yarn_color_name: any;
  c_date: any;
  remarks: any;
  id: any;
  view: boolean = false;
  show: boolean;
  warping_production_data: Object;

  constructor(public popup: PopupService, public modalController: ModalController, private route: Router, private activatedRoute: ActivatedRoute, private api: WarpingService) { }

  ngOnInit() {
    this.showTime();
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      var type = params['type'];
      if (type == 'view') {
        this.show = false;
      }
      else {
        this.show = true;
      }
    });
    if (this.id) {
      this.view = true;
      this.start_warping_production_view();
    }
  }

  start_warping_production_view() {
    if (this.id) {
      this.api.start_warping_production_view(this.id).subscribe(
        data => {
          this.warping_production_data = data;
          console.log(this.warping_production_data);
          this.transaction_number = this.warping_production_data['data']['production_order_info']['transaction_number'];
          this.machine_number = this.warping_production_data['data']['machine_number'];
          this.yarn_article_name = this.warping_production_data['data']['production_order_info']['yarn_article_name'];
          this.yarn_color_name = this.warping_production_data['data']['production_order_info']['yarn_article_color'];
          var today = new Date(this.warping_production_data['data']['start_datetime']);
          var month = new Array();
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
          var date = new Date();
          var dd = today.getDate();
          var mm = month[today.getMonth()];
          var year = today.getFullYear();
          var date_cur = dd + '-' + mm + '-' + year;
          var h: any = date.getHours();
          var m: any = date.getMinutes();
          var s: any = date.getSeconds();
          var session = "AM";

          if (h == 0) {
            h = 12;
          }

          if (h > 12) {
            h = h - 12;
            session = "PM";
          }

          h = (h < 10) ? "0" + h : h;
          m = (m < 10) ? "0" + m : m;
          s = (s < 10) ? "0" + s : s;

          var time = h + ":" + m + ":" + s + " " + session;
          this.c_date = date_cur + ', ' + time;
          this.remarks = this.warping_production_data['data']['remarks'];
        })
    }
  }

  showTime() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var date = new Date();
    var today = new Date();
    var dd = today.getDate();
    var mm = month[today.getMonth()];
    var year = today.getFullYear();
    var date_cur = dd + '-' + mm + '-' + year;
    var h: any = date.getHours();
    var m: any = date.getMinutes();
    var s: any = date.getSeconds();
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    this.c_date = date_cur + ', ' + time;
  }

  getwrapdata(event) {
    if (event && event.target.value) {
      this.api.wrap_machine_data(event.target.value).subscribe(
        (data: any) => {
          if ((data['status'] == 200)) {
            console.log("api hit");
            this.wrap_data = data['data']['results'];
            this.wrap_data_flag = true;
            for (let i = 0; i < this.wrap_data.length; i++) {
              if (this.wrap_data[i]['transaction_number'] == this.transaction_number) {
                this.wrap_data_flag = false;
              }
            }
          }
        })
    }
  }

  wrap_alldata() {
    console.log(this.transaction_number);
    for (let i = 0; i < this.wrap_data.length; i++) {
      if (this.wrap_data[i]['transaction_number'] == this.transaction_number) {
        this.api.wrap_allmachine_data(this.wrap_data[i]['id']).subscribe(
          (data: any) => {
            if ((data['status'] == 200)) {
              console.log(data);
              this.machine_number = data['data']['machine_info']['machine_number'];
              this.yarn_article_name = data['data']['yarn_article_name'];
              this.yarn_color_name = data['data']['yarn_color_name'];
              this.c_date = data['data']['c_date'];
              this.remarks = data['data']['machine_info']['remarks'];
              this.showTime();
              // this.total_qty_produced = data['data']['results'][0]['total_qty_produced'];
              // this.start_greige_production_machine = data['data']['results'][0]['id'];
              // this.lot_no_A = data['data']['id'];
              // this.lot_no_B = data['data']['id'];
            }

          })
      }
    }
  }

  register(){
    if(this.transaction_number){

    }
    else{
      this.popup.showAlert('Warping Production','Please fill all the required fields');
    }
  }
}
