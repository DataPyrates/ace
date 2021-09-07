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

  constructor(public popup: PopupService, public modalController: ModalController, private route: Router, private activatedRoute: ActivatedRoute, private api: WarpingService) { }

  ngOnInit() {
  }

  getwrapdata(event){
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
              // this.total_qty_produced = data['data']['results'][0]['total_qty_produced'];
              // this.start_greige_production_machine = data['data']['results'][0]['id'];
              // this.lot_no_A = data['data']['id'];
              // this.lot_no_B = data['data']['id'];
            }

          })
      }
    }

  }
}