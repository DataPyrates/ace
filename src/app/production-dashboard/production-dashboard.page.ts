import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

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
  productionlog:any;
  
  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
    this.greige_production_log();
  }
  
  greige_production_log(){
   this.page=1;  
    this.api.greige_production_log(this.page).subscribe(
    (data :any )=> {
     if((data['status'] == 200)){
       this.productionlog=data['data']['results']
     }
    
    })
  }
}
