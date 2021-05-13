import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';
import { JwPaginationModule } from 'jw-angular-pagination';


@Component({
  selector: 'app-production-dashboard',
  templateUrl: './production-dashboard.page.html',
  styleUrls: ['./production-dashboard.page.scss'],
})
export class ProductionDashboardPage implements OnInit {
  machine_detail:any;
  machine_no:any;
  greige_article_name:any;
  greige_production_transaction_number:any;
  operator:any;
  page:any;
  items = [];
  pageOfItems: Array<any>;
  
  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
    this.greige_production_log();
  }
  
  greige_production_log(){
   this.page=1;  
    this.api.greige_production_log_data(this.page).subscribe(
    (data :any )=> {
     if((data['status'] == 200)){
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
       this.items=data['data']['results'];
       for(let i= 0;i<this.items.length;i++){
        var c_date = this.items[i]['created_date'];
        var today = new Date(c_date);
        var dd = today.getDate();
        var mm = month[today.getMonth()];
        var year = today.getFullYear();
        this.items[i]['created_date'] = dd+'-'+mm+'-'+year;
       }
     }
    
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
   }

}
