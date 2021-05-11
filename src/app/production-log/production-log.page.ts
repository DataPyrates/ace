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
  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
   this.machine_data();
  }
  opengrid(){
this.secondgrid=true;
  }

  machine_data(){
    var machine_role = 2;
      this.api.machine_data(machine_role).subscribe(
      (data :any )=> {
       if((data['status'] == 200)){
  
       }
       else{
        alert(data[0]['msg']);
       }
      })
    
    
  }
}
