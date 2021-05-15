import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router,NavigationExtras } from '@angular/router';
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
  
  collection = [];
  constructor(private route: Router,private api: ApiService) { 
   
  }

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
       this.collection=data['data']['results'];
       for(let i= 0;i<this.collection.length;i++){
        var c_date = this.collection[i]['created_date'];
        var today = new Date(c_date);
        var dd = today.getDate();
        var mm = month[today.getMonth()];
        var year = today.getFullYear();
        this.collection[i]['created_date'] = dd+'-'+mm+'-'+year;
       }
     }
    
    })
  }

  view(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
      }
    };
    this.route.navigate(['/production-log'],navigationExtras);
  }

}
