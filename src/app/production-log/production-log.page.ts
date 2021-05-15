import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


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
  production_data:any;
  machine_number:any;
  id:any;
  view:boolean = false;
  production_log_details:any;


  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }
 
  ngOnInit() {
   this.get_machine_data();
   this.activatedRoute.queryParams.subscribe(params => {
    this.id = params['id'];
  });
   if(this.id){
    this.view = true;
    this.production_data_log_view();

  }
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
    production_data_log_view(){
      if (this.id) {
        this.api.production_log_view(this.id).subscribe(
          data => {
            this.production_data = data;
            console.log(this.production_data);
            this.machine_no = data['data']['machine_number'];
            this.greige_production_transaction_number=data['data']['greige_production_transaction_number'];
             this.operator=data['data']['operator_first_name'];
             this.greige_article_name=data['data']['greige_article'];
             this.production_log_details = data['data']['production_log_details'];
          })
      }
    }
   
  }

