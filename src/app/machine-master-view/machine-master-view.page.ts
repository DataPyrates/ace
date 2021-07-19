import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {PopupService} from '../../app/popup.service';
import copy from 'text-copy';
@Component({
  selector: 'app-machine-master-view',
  templateUrl: './machine-master-view.page.html',
  styleUrls: ['./machine-master-view.page.scss'],
})
export class MachineMasterViewPage implements OnInit {

  show:boolean;
  id: any ="";
  view: boolean = false;
  department: string;
  branch: string;
  updated_date: any;
  i_date: any;
  number: any;
  machine_data: any;
  machine_master: any;
  machine_type_name: any;
  machine_make: any;
  year: any;
  remark: any;
  status: any;
  machine_status: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService,public popup:PopupService) { }

  ngOnInit() {
    this.machine_type();
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      var type = params['type'];
      if(type=='view'){
        this.show = false;
      }
      else{
        this.show=true;
      }
    });
    if (this.id) {
      this.view = true;
      this.machine_master_data_log_view();
    }
  }
machine_type(){
    this.api.machine_type_data().subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
           this.machine_data = data['data']['results'];
           this.machine_master = data['data']['results'][0]['id'];
           console.log(this.machine_data);
         
        }
      })
  
}


  machine_master_data_log_view() {
    if (this.id) {
      this.api.machine_view(this.id).subscribe(
        data => {
          this.number = data['data']['number'];
          this.department = localStorage.getItem('department');
          this.branch = localStorage.getItem('branch_name');
          this.i_date = data['data']['machine_installation_date'];
          this.machine_type_name = data['data']['machine_type_name'];
          this.year = data['data']['year'];
          this.machine_make = data['data']['machine_make'];
          this.remark = data['data']['remarks'];
          this.status = data['data']['active'];
          console.log(this.status);
          if(this.status == true){
            this.machine_status ="Active";
          }
          }          

      )}

  }
}
