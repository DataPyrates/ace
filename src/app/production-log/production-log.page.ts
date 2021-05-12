import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-production-log',
  templateUrl: './production-log.page.html',
  styleUrls: ['./production-log.page.scss'],
})
export class ProductionLogPage implements OnInit {
  secondgrid:boolean=false;
  machine_data:any;
  machine_detail:any;
  machine_no:any;
  greige_article_name:any;
  greige_production_transaction_number:any;
  operator:any;


  constructor(private route: Router,private api: ApiService) { } 
 
  ngOnInit() {
   this.get_machine_data();
  }

  opengrid(){
  this.secondgrid=true;
  }

  get_machine_data(){
    var machine_role = 2;
      this.api.get_machine_data(machine_role).subscribe(
      (data :any )=> {
       if((data['status'] == 200)){
         this.machine_data=data['data']['results'];
       }
      
      })
    }

    get_machine_detail(){
      this.api.get_machine_detail(this.machine_no).subscribe(
      (data :any )=> {
       if((data['status'] == 200)){
         this.greige_production_transaction_number=data['data']['results'][0]['greige_production_transaction_number'];
         this.greige_article_name=data['data']['results'][0]['greige_article_name'];
         this.operator = localStorage.getItem('username')
       }
      
      })
    }
}
