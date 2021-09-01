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

  constructor(public popup: PopupService, public modalController: ModalController, private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
  }
getwkdata(event){
  if(event && event.target.value){
    this.api.wk_machine_data(event.target.value).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
           this.wk_data = data['data']['results'];
           
        }
      })
  }

}
}
