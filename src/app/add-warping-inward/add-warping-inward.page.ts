import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { WarpingService } from './../warping.service';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';
import copy from 'text-copy';
import { PopupService } from './../popup.service';

@Component({
  selector: 'app-add-warping-inward',
  templateUrl: './add-warping-inward.page.html',
  styleUrls: ['./add-warping-inward.page.scss'],
})
export class AddWarpingInwardPage implements OnInit {
  warp_data_flag: boolean = true;
  warp_data: any;
  machine_type_name: any;
  transaction_number: any;
  yarn_article_name: any;
  yarn_color_name: any;
  yarn_lot_number: any;
  quantity: any;
  remarks: any;

  constructor(public popup: PopupService, public modalController: ModalController, private route: Router, private activatedRoute: ActivatedRoute, private api: WarpingService) { }

  ngOnInit() {
  }

  getwrapinwarddata(event){
    if (event && event.target.value) {
      this.api.warp_inward_machine_data(event.target.value).subscribe(
        (data: any) => {
          if ((data['status'] == 200)) {
            console.log("api hit");
            this.warp_data = data['data']['results'];
            this.warp_data = true;
            for (let i = 0; i < this.warp_data.length; i++) {
              if (this.warp_data[i]['machine_type_name'] == this.machine_type_name) {
                this.warp_data_flag = false;
              }
            }
          }
        })
    }
  }

  wrapinward_alldata() {
    console.log(this.machine_type_name);
    for (let i = 0; i < this.warp_data.length; i++) {
      if (this.warp_data[i]['machine_type_name'] == this.machine_type_name) {
        this.api.wrapinward_allmachine_data(this.warp_data[i]['id']).subscribe(
          (data: any) => {
            if ((data['status'] == 200)) {
              console.log(data);
              this.transaction_number = data['data']['production_order_info']['transaction_number'];
              this.yarn_article_name = data['data']['machine_yarn_info']['yarn_article_name'];
              this.yarn_color_name = data['data']['machine_yarn_info']['yarn_color_name'];
              this.yarn_lot_number = data['data']['machine_yarn_info']['lot_number_code'];
              this.quantity = data['data']['total_qty'];
               this.remarks = data['data']['remarks'];
             
            }

          })
      }
    }

  }
}
