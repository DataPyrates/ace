import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, NavigationExtras } from '@angular/router';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';

@Component({
  selector: 'app-start-wk-production',
  templateUrl: './start-wk-production.page.html',
  styleUrls: ['./start-wk-production.page.scss'],
})
export class StartWkProductionPage implements OnInit {

  operator: any;
  page: any;
  term: any = '';

  qrdata = [];
  production = [];
  total_length_produced: any;
  total_qty_produced: any;
  start_greige_production_machine: any;
  total: any;


  constructor(private route: Router, private api: ApiService,  public modalController: ModalController) { }

  ngOnInit() {
    this.wk_production_log(1);
  }
  wk_production_log(page) {
    this.page = 1;
    //let start_greige_production_machine__machine_master__number__icontains = this.term;
    this.api.wk_production_log_data(this.page).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
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
          this.production = data['data']['results'];
          this.total = data['data']['count'];
          for (let i = 0; i < this.production.length; i++) {
            var c_date = this.production[i]['created_date'];
            var today = new Date(c_date);
            var dd = today.getDate();
            var mm = month[today.getMonth()];
            var year = today.getFullYear();
            this.production[i]['created_date'] = dd + '-' + mm + '-' + year;
          }
        }

      })
  }

}
