import { Component, OnInit } from '@angular/core';
import { WarpingService } from './../warping.service';
import { Router, NavigationExtras } from '@angular/router';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ModalController } from '@ionic/angular';
import { OpenBarcodePage } from './../open-barcode/open-barcode.page';

@Component({
  selector: 'app-start-warping-production',
  templateUrl: './start-warping-production.page.html',
  styleUrls: ['./start-warping-production.page.scss'],
})
export class StartWarpingProductionPage implements OnInit {
  page: number;
  warping_production: any;
  total: any;
  term: any;

  constructor(private route: Router, private api: WarpingService,  public modalController: ModalController) { }

  ngOnInit() {
    this.warping_production_log(1);
  }

  getFilterdata() {
    this.warping_production_log(this.page);
  }

  view(id,type){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        type:type,
      }
    };
    this.route.navigate(['/add-start-warping-production'],navigationExtras);
  }

  warping_production_log(page) {
    this.page = 1;
    var machine_master__number__icontains = this.term?this.term:'';
    this.api.warping_production_log_data(this.page,machine_master__number__icontains).subscribe(
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
          this.warping_production = data['data']['results'];
          this.total = data['data']['count'];
          for (let i = 0; i < this.warping_production.length; i++) {
            var c_date = this.warping_production[i]['created_date'];
            var today = new Date(c_date);
            var dd = today.getDate();
            var mm = month[today.getMonth()];
            var year = today.getFullYear();
            this.warping_production[i]['created_date'] = dd + '-' + mm + '-' + year;
          }
        }

      })
}
}
