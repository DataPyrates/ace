import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-machine-master',
  templateUrl: './machine-master.page.html',
  styleUrls: ['./machine-master.page.scss'],
})
export class MachineMasterPage implements OnInit {
  page: number;
  collection = [];
  total: any;

  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
    this.get_machine_data(1);
  }
  
  get_machine_data(page){
    this.page=1;  
    this.api.machine_data(this.page).subscribe(
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
          var c_date = this.collection[i]['machine_installation_date'];
          var today = new Date(c_date);
          var dd = today.getDate();
          var mm = month[today.getMonth()];
          var year = today.getFullYear();
          this.collection[i]['machine_installation_date'] = dd+'-'+mm+'-'+year;
          this.collection[i]['active']= this.collection[i]['active']?'Active':'Inactive';
         }
       }
      
      })
  }
  pageChanged(event){
    this.get_machine_data(event);
   }

}
