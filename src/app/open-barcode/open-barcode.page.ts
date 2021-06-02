import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-open-barcode',
  templateUrl: './open-barcode.page.html',
  styleUrls: ['./open-barcode.page.scss'],
})
export class OpenBarcodePage implements OnInit {
  qr_code:any;
  flag_qr: string;
  inward_production: any;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.qr_code = localStorage.getItem('qr_code');
    this.flag_qr= localStorage.getItem('flag_qr');
    this.inward_production = JSON.parse(localStorage.getItem('data_inward_production'));
    console.log(this.inward_production);
  }
  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}
