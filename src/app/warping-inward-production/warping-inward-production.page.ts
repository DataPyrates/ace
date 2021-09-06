import { Component, OnInit } from '@angular/core';
import { WarpingService } from './../warping.service';
import { Router, NavigationExtras } from '@angular/router';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';

@Component({
  selector: 'app-warping-inward-production',
  templateUrl: './warping-inward-production.page.html',
  styleUrls: ['./warping-inward-production.page.scss'],
})
export class WarpingInwardProductionPage implements OnInit {
  page: number;
  warp_inward_production: any;
  total: any;

  constructor(private route: Router, private api: WarpingService,  public modalController: ModalController) { }

  ngOnInit() {
    this.inward_warp_inward_production_log(1);
  }
  inward_warp_inward_production_log(page) {
    this.page = 1;
    //let start_greige_production_machine__machine_master__number__icontains = this.term;
    this.api.inward_warp_inward_production_log_data(this.page).subscribe(
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
          this.warp_inward_production = data['data']['results'];
          this.total = data['data']['count'];
          for (let i = 0; i < this.warp_inward_production.length; i++) {
            var c_date = this.warp_inward_production[i]['created_date'];
            var today = new Date(c_date);
            var dd = today.getDate();
            var mm = month[today.getMonth()];
            var year = today.getFullYear();
            this.warp_inward_production[i]['created_date'] = dd + '-' + mm + '-' + year;
          }
        }

      })
}
}
