import { Component, OnInit,ViewChild } from '@angular/core';
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
  term: any = '';
  total: any;
  constructor(private route: Router,private api: ApiService) { 
   
  }

  ngOnInit() {
    this.greige_production_log(1);
  }
  
  greige_production_log(page){
   this.page=page;  
   let start_greige_production__machine_master__number__icontains = this.term;
    this.api.greige_production_log_data(this.page,start_greige_production__machine_master__number__icontains).subscribe(
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
       this.total = data['data']['count'];
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

  view(id,type){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        type:type,
      }
    };
    this.route.navigate(['/production-log'],navigationExtras);
  }
  getFilterdata(){
    this.greige_production_log(this.page);
  }
  pageChanged(event){
    this.greige_production_log(event);
   }
}
