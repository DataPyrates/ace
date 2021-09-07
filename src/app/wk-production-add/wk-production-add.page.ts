import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from './../api.service';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';
import copy from 'text-copy';
import { PopupService } from './../popup.service';

@Component({
  selector: 'app-wk-production-add',
  templateUrl: './wk-production-add.page.html',
  styleUrls: ['./wk-production-add.page.scss'],
})
export class WkProductionAddPage implements OnInit {
  wk_data: any;
  transaction_number: any;
  machine_number: any;
  greige_article_name: any;
  greige_color_name: any;
  quantity: any;
  machine_width: any;
  wk_data_flag: boolean = true;

  constructor(public popup: PopupService, public modalController: ModalController, private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
  }

  getwkdata(event) {
    if (event && event.target.value) {
      this.api.wk_machine_data(event.target.value).subscribe(
        (data: any) => {
          if ((data['status'] == 200)) {
            console.log("api hit");
            this.wk_data = data['data']['results'];
            this.wk_data_flag = true;
            for (let i = 0; i < this.wk_data.length; i++) {
              if (this.wk_data[i]['transaction_number'] == this.transaction_number) {
                this.wk_data_flag = false;
              }
            }
          }
        })
    }

  }

  wk_alldata() {
    console.log(this.transaction_number);
    for (let i = 0; i < this.wk_data.length; i++) {
      if (this.wk_data[i]['transaction_number'] == this.transaction_number) {
        this.api.wk_allmachine_data(this.wk_data[i]['id']).subscribe(
          (data: any) => {
            if ((data['status'] == 200)) {
              console.log(data);
              this.machine_number = data['data']['machine_info']['machine_number'];
              this.greige_article_name = data['data']['greige_article_name'];
              this.greige_color_name = data['data']['greige_color_name'];
              this.quantity = data['data']['quantity'];
              this.machine_width = data['data']['machine_info']['machine_width'];
             
            }

          })
      }
    }

  }
}
