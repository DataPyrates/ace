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
  
  
  product = [];
  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
    this.inward_production_log();
  }

  inward_production_log(){
    this.page=1;  
     this.api.inward_production_log_data(this.page).subscribe(
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
 
 view(id){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      id: id,
    }
  };
  this.route.navigate(['/add-inward-production'],navigationExtras);
}
 
 }
 

