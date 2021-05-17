import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-open-barcode',
  templateUrl: './open-barcode.page.html',
  styleUrls: ['./open-barcode.page.scss'],
})
export class OpenBarcodePage implements OnInit {
  qr_code:any;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.qr_code = localStorage.getItem('qr_code');
  }
  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}
