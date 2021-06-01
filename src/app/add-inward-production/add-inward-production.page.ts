import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from './../api.service';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';
import copy from 'text-copy';
import { PopupService } from './../popup.service';



@Component({
  selector: 'app-add-inward-production',
  templateUrl: './add-inward-production.page.html',
  styleUrls: ['./add-inward-production.page.scss'],
})
export class AddInwardProductionPage implements OnInit {
  id: any;
  inward_data: any;
  operator_name: any;
  quantity: any;
  greige_color_name: any;
  greige_article_name: any;
  greige_production_transaction_number: any;
  view: boolean = false;
  machine_number: any;
  inward_item: any;
  modelData: any;
  transaction_number: any;
  inward_production_data: any;
  width_A: any;
  width_B: any;
  start_meter_B: any;
  start_meter_A: any;
  end_meter = 0;
  roll_cut = 0;
  weight = 0;
  lot_no = 0;
  total_length_produced: any;
  total_qty_produced: any;
  roll_cut_A: number =0;
  end_meter_A: any;
  weight_A: any;
  weight_B:any;
  start_greige_production_machine: any;
  process_status_display: any;
  lot_no_A: any;
  lot_no_B: any;
  roll_cut_B: number =0;
  end_meter_B: any;
  sameendflag:boolean = true;
  show:boolean;

  constructor(public popup: PopupService, public modalController: ModalController, private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.get_all_inward_data();
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      var type = params['type'];
      if(type == 'view'){
        this.show = false;
      }
      else{
        this.show = true;
      }
    });
    if (this.id) {
      this.view = true;
      this.inward_data_log_view();
      this.machine_master();
    }
  }

  inward_data_log_view() {
    if (this.id) {
      this.api.inward_production_log_view(this.id).subscribe(
        data => {
          this.inward_data = data;
          this.operator_name = data['data']['operator_name'];
          this.quantity = data['data']['production_info']['quantity']+' Kg';
          this.greige_color_name = data['data']['production_info']['greige_color_name'];
          this.greige_article_name = data['data']['production_info']['greige_article_name'];
          this.greige_production_transaction_number = data['data']['production_info']['greige_production_order_transaction_number'];
          this.machine_number = data['data']['machine_info']['machine_number'];
          this.inward_item = data['data']['roll_inventory_items'];
          this.transaction_number = data['data']['transaction_number'];
          this.process_status_display = data['data']['process_status_display'];
          this.lot_no_A = this.id;
          this.lot_no_B = this.id;
          this.start_meter_A =  data['data']['start_meter_A'];
          this.start_meter_B =  data['data']['start_meter_B'];
          this.end_meter_A=0;
          this.end_meter_B=0; 
          this.weight_A =0;
          this.weight_B=0;
          this.roll_cut_A=0;
          this.roll_cut_B =0;
        })
    }
  }
  async openIonModal(qr_code) {
    localStorage.setItem('qr_code', qr_code);
    const modal = await this.modalController.create({
      component: OpenBarcodePage,
      componentProps: {
        'model_title': "Nomadic model's reveberation"
      }
    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });

    return await modal.present();
  }

  copyTransaction(transaction_number) {
    copy(transaction_number);
    this.popup.showAlert('Transaction Number', 'Copied');

  }
  get_all_inward_data() {
    var process_status = 0;
    this.api.get_inward_data(process_status).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          this.inward_production_data = data['data']['results'];
          this.greige_article_name = data['data']['results'][0]['greige_article_name'];
          this.greige_production_transaction_number = data['data']['results'][0]['greige_production_transaction_number'];
          this.greige_color_name = data['data']['results'][0]['production_order_info']['greige_color_name'];
          this.quantity = data['data']['results'][0]['production_order_info']['quantity'];
          this.operator_name = localStorage.getItem('username');
          this.width_A = data['data']['results'][0]['width_A'];
          this.width_B = data['data']['results'][0]['width_B'];
          this.start_meter_A = data['data']['results'][0]['taakas_start_meter']['start_meter_A'];
          this.start_meter_B = data['data']['results'][0]['taakas_start_meter']['start_meter_B'];
        }
      })
  }

  machine_master() {
    var machine_master = 9;
    this.api.get_machine_master(machine_master).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          this.total_length_produced = data['data']['results'][0]['total_length_produced'];
          this.total_qty_produced = data['data']['results'][0]['total_qty_produced'];
          this.start_greige_production_machine = data['data']['results'][0]['id'];
          // this.lot_no_A = data['data']['id'];
          // this.lot_no_B = data['data']['id'];
          console.log(this.total_length_produced, this.total_qty_produced);
        }

      })
  }

  stickerA() {
    if(this.end_meter_A || this.end_meter_A > 0){
    if(this.weight_A || this.weight_A >0 ){
    var insert_roll_inventory_item = [];
    insert_roll_inventory_item.push({
      "roll_width": this.width_A, "length_in_meter": this.roll_cut_A, "end_meter": this.end_meter_A,
      "start_meter": this.start_meter_A, 'weight_in_kg': this.weight_A, 'greige_inward_production': null, 'taaka_or_piece_number': 'A'
    });
    if (this.end_meter_A && this.weight_A) {
      if(this.id && this.id >0){
       let post = {
        roll_width:this.width_A,
        length_in_meter:this.roll_cut_A,
        end_meter:this.end_meter_A,
        start_meter:this.start_meter_A,
        weight_in_kg:this.weight_A,
        greige_inward_production:this.id,
        taaka_or_piece_number: "A"
       }
       this.api.greige_inward_roll_inventory(post).subscribe(
        (data: any) => {
          if (data) {
            this.inward_data_log_view();
            this.machine_master();
          }
        })
      }
      else{
      let post = {
        insert_roll_inventory_item: insert_roll_inventory_item[0],
        start_greige_production_machine: this.start_greige_production_machine
      }
      this.api.get_greige_inward_card(post).subscribe(
        (data: any) => {
          if ((data['status'] == 200)) {
          }
        })
      }
    }
    }
    else{
      this.popup.showAlert("Greige Inward Production","Please enter the weight");      
    }
    }
    else{
      this.popup.showAlert("Greige Inward Production","Please enter the end meter");      
    }
  }

  stickerB() {
    if(this.end_meter_B || this.end_meter_B > 0){
    if(this.weight_B || this.weight_B >0 ){
    if(this.end_meter_B > this.start_meter_A){
    var insert_roll_inventory_item = [];
    insert_roll_inventory_item.push({
      "roll_width": this.width_B, "length_in_meter": this.roll_cut_B, "end_meter": this.end_meter_B,
      "start_meter": this.start_meter_B, 'weight_in_kg': this.weight_B, 'greige_inward_production': null, 'taaka_or_piece_number': 'B'
    });
    if (this.end_meter_B && this.weight_B) {
      if(this.id && this.id >0){
       let post = {
        roll_width:this.width_B,
        length_in_meter:this.roll_cut_B,
        end_meter:this.end_meter_B,
        start_meter:this.start_meter_B,
        weight_in_kg:this.weight_B,
        greige_inward_production:this.id,
        taaka_or_piece_number: "B"
       }
       this.api.greige_inward_roll_inventory(post).subscribe(
        (data: any) => {
          if (data) {
            this.inward_data_log_view();
            this.machine_master();
          }
        })
      }
      else{
      let post = {
        insert_roll_inventory_item: insert_roll_inventory_item[0],
        start_greige_production_machine: this.start_greige_production_machine
      }
      this.api.get_greige_inward_card(post).subscribe(
        (data: any) => {
          if ((data['status'] == 200)) {
          }
        })
      }
    }
    }
    else{
      this.popup.showAlert("Greige Inward Production","End meter should not be less than start meter");      
    }
    }
    else{
      this.popup.showAlert("Greige Inward Production","Please enter the weight");      
    }
    }
    else{
      this.popup.showAlert("Greige Inward Production","Please enter the end meter");      
    }
  }

  get_rollcut(type) {
    console.log(this.start_meter_A,this.end_meter_A/this.start_meter_B,this.end_meter_B);
    if (type == 'A' && this.end_meter_A >= this.start_meter_A) {
      this.roll_cut_A = this.end_meter_A - this.start_meter_A;
    }
    else if (type == 'B' && this.end_meter_B >= this.start_meter_B) {
      this.roll_cut_B = this.end_meter_B - this.start_meter_B;
    }
    if(this.sameendflag==true){
      if(type == 'B'){
        this.end_meter_A = this.end_meter_B;
      }
      this.end_meter_B = this.end_meter_A;
      this.roll_cut_B = this.end_meter_B - this.start_meter_B;
    }
  }
  
uncheck(e){
  console.log(e.target.checked);
  if(e.target.checked==true){
    this.sameendflag = true;
  }
  else{
    this.sameendflag = false;
  }
}

save(){
  var process_status = 2;
  this.api.greige_inward_save(this.id,process_status).subscribe(
    (data: any) => {
      if (data) {
        this.inward_data_log_view();
        this.machine_master();
      }
    })

}
}
