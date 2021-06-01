import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router,NavigationExtras } from '@angular/router';
import { JwPaginationModule } from 'jw-angular-pagination';

@Component({
  selector: 'app-inward-production-dashboard',
  templateUrl: './inward-production-dashboard.page.html',
  styleUrls: ['./inward-production-dashboard.page.scss'],
})
export class InwardProductionDashboardPage implements OnInit {
 
  operator:any;
  page:any;
  term: any = '';

  
  product = [];
  total_length_produced: any;
  total_qty_produced: any;
  start_greige_production_machine: any;
  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
    this.inward_production_log();
  }

  inward_production_log(){
    this.page=1;  
    let start_greige_production_machine__machine_master__number__icontains = this.term;
     this.api.inward_production_log_data(this.page,start_greige_production_machine__machine_master__number__icontains).subscribe(
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
        this.product=data['data']['results'];
        for(let i= 0;i<this.product.length;i++){
         var c_date = this.product[i]['created_date'];
         var today = new Date(c_date);
         var dd = today.getDate();
         var mm = month[today.getMonth()];
         var year = today.getFullYear();
         this.product[i]['created_date'] = dd+'-'+mm+'-'+year;
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
  this.route.navigate(['/add-inward-production'],navigationExtras);
}

machine_master(){
  var machine_master = 9;
  this.api.get_machine_master(machine_master).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
        this.total_length_produced = data['data']['results'][0]['total_length_produced'];
        this.total_qty_produced = data['data']['results'][0]['total_qty_produced'];
        this.start_greige_production_machine = data['data']['results'][0]['id'];
        console.log(this.total_length_produced,this.total_qty_produced);
      }

    })
}
 
getFilterdata(){
  this.inward_production_log();
}
 }
 

