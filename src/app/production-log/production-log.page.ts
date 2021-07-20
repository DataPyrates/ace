import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {PopupService} from '../../app/popup.service';
import copy from 'text-copy';

@Component({
  selector: 'app-production-log',
  templateUrl: './production-log.page.html',
  styleUrls: ['./production-log.page.scss'],
})

export class ProductionLogPage implements OnInit {
  secondgrid: boolean = false;
  machine_data: any;
  machine_detail: any;
  machine_no: any;
  greige_article_name: any;
  greige_production_transaction_number: any;
  operator: any;
  production_data: any;
  machine_number: any;
  id: any ="";
  view: boolean = false;
  production_log_details: any;
  machine_flag: boolean = false;
  start_time:any = '';
  end_time:any = '';
  start_greige_production:any = 0;
  taka_no_flag:boolean = true;
  process_status_display: any;
  meter_reading: any;
  taka_no: any;
  created_by: any;
  end_time_without: string;
  fields: any;
  stop_duration_minutes: any;
  endminutes: number;
  startminutes: number;
  transaction_number: any;
  show:boolean;
  machine_master: any;
  course: any;
  shift: any;
  created_date: any;
  c_date: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService,public popup:PopupService) { }
  ngOnInit() {
    this.get_machine_data();
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
      this.production_data_log_view();
    }
  }

  get_machine_data() {
    var machine_role = 2;
    this.api.get_machine_data(machine_role).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          this.machine_data = data['data']['results'];
        }

      })
  }

  get_machine_detail() {
    this.api.get_machine_detail(this.machine_master).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          this.machine_flag = true;
          this.greige_production_transaction_number = data['data']['results'][0]['greige_production_transaction_number'];
          //this.greige_article_name = data['data']['results'][0]['greige_article_name'];
          this.operator = localStorage.getItem('username');
          this.start_greige_production = data['data']['results'][0]['id'];
          this.get_machine_greige();
        }

      })
  }

  copyTransaction(transaction_number){
    copy(transaction_number);
    this.popup.showAlert('Transaction Number','Copied');
  }

  production_data_log_view() {
    if (this.id) {
      this.api.production_log_view(this.id).subscribe(
        data => {
          this.production_data = data;
          console.log(this.production_data);
          this.machine_no = data['data']['machine_number'];
          this.greige_production_transaction_number = data['data']['greige_production_transaction_number'];
          this.transaction_number= data['data']['transaction_number'];
          this.operator = data['data']['operator_first_name'];
          //this.greige_article_name = data['data']['greige_article'];
          this.production_log_details = data['data']['production_log_details'];
          this.process_status_display = data['data']['process_status_display'];
          if(this.process_status_display == 'Paused'){
          this.taka_no_flag = false;
          }
          if(data['data']['updated_date']){
          var now = new Date(data['data']['updated_date']);
          var isPM = now.getHours() >= 12;
          var isMidday = now.getHours() == 12;
          var time = [now.getHours() - (isPM && !isMidday ? 12 : 0),
            now.getMinutes(),
            now.getSeconds() || '00'].join(':') +
              (isPM ? 'pm' : 'am');
          if(this.process_status_display == 'Paused'){
          this.end_time = time;
          }
          this.end_time_without = [now.getHours() - (isPM && !isMidday ? 12 : 0),
            now.getMinutes(),
            now.getSeconds() || '00'].join(':');
          this.endminutes = now.getMinutes();
          }
          this.created_by = data['data']['created_by'];
          if(this.production_log_details && this.production_log_details.length >0){
            for(let i=0;i < this.production_log_details.length;i++){
              var field ="";
              this.production_log_details[i]['stop_time'] = this.convert(this.production_log_details[i]['stop_time']);
              this.production_log_details[i]['start_time'] = this.convert(this.production_log_details[i]['start_time']);
              if(this.production_log_details[i]['field1_is_error']==true){
                field += "Field 1, ";
              }
              if(this.production_log_details[i]['field2_is_error']==true){
                field += "Field 2, ";
              }
              if(this.production_log_details[i]['field3_is_error']==true){
                field += "Field 3, ";
              }
              if(this.production_log_details[i]['field4_is_error']==true){
                field += "Field 4, ";
              }
              if(this.production_log_details[i]['field5_is_error']==true){
                field += "Field 5, ";
              }
              if(this.production_log_details[i]['field6_is_error']==true){
                field += "Field 6, ";
              }
              if(this.production_log_details[i]['field7_is_error']==true){
                field += "Field 7, ";
              }
              if(this.production_log_details[i]['field8_is_error']==true){
                field += "Field 8, ";
              }
              if(this.production_log_details[i]['field9_is_error']==true){
                field += "Field 9, ";
              }
              if(this.production_log_details[i]['field10_is_error']==true){
                field += "Field 10, ";
              }
              if(this.production_log_details[i]['field11_is_error']==true){
                field += "Field 11, ";
              }
              if(this.production_log_details[i]['field12_is_error']==true){
                field += "Field 12, ";
              }
              this.production_log_details[i]['field']= field;
            }
          }
        })
    }
  }

  convert(dates){
    var now = new Date(dates);
    now.setHours(now.getHours());
    var isPM = now.getHours() >= 12;
    var isMidday = now.getHours() == 12;
    var time = [now.getHours() - (isPM && !isMidday ? 12 : 0),
    now.getMinutes(),
    now.getSeconds() || '00'].join(':') +
      (isPM ? 'pm' : 'am');
    return time;
  }

  startprocess() {
    if (this.process_status_display == 'Paused' || this.process_status_display=="Running") {
    if(this.taka_no){
    if(this.meter_reading){
      var now = new Date();
      now.setHours(now.getHours());
      var isPM = now.getHours() >= 12;
      var isMidday = now.getHours() == 12;
      var cur_time = [now.getHours() - (isPM && !isMidday ? 12 : 0),
      now.getMinutes(),
      now.getSeconds() || '00'].join(':');
      this.start_time = cur_time+(isPM ? 'pm' : 'am');
      this.startminutes = now.getMinutes();
      this.stop_duration_minutes = this.startminutes-this.endminutes;
      let postData = {
        meter_reading:this.meter_reading,
        operator:this.created_by,
        production_log:this.id,
        start_greige_production:this.start_greige_production,
        start_time:cur_time,
        stop_duration_minutes:this.stop_duration_minutes,
        stop_time:this.end_time_without,
        taaka_error_list:this.taka_no.join(),
        field1_is_error:this.checkedfields('f1'),
        field2_is_error:this.checkedfields('f2'),
        field3_is_error:this.checkedfields('f3'),
        field4_is_error:this.checkedfields('f4'),
        field5_is_error:this.checkedfields('f5'),
        field6_is_error:this.checkedfields('f6'),
        field7_is_error:this.checkedfields('f7'),
        field8_is_error:this.checkedfields('f8'),
        field9_is_error:this.checkedfields('f9'),
        field10_is_error:this.checkedfields('f10'),
        field11_is_error:this.checkedfields('f11'),
        field12_is_error:this.checkedfields('f12'),
      }
      this.api.greige_production_log_details(postData).subscribe(
        data => {
          this.taka_no_flag = false;
          this.production_data_log_view();
          this.start_time ="";
          this.end_time="";
          this.meter_reading="";
          this.taka_no="";
          this.fields="";
          this.stop_duration_minutes="";

          
      });
    }
    else{
      this.popup.showAlert("Start Timer","Please enter meter reading");
    }
    }
    else{
    this.popup.showAlert("Start Timer","Please select takka");      
    }
    }
  }

  checkedfields(value){
  if(this.fields && this.fields.length >0){
  for(var i = 0; i < this.fields.length; i++) {
    if(this.fields[i] === value) {
      return true;
    }
  }
  }
  else{
    return false;
  }
  }

  stopprocess() {
    if(this.start_time == '' && (this.process_status_display == 'Paused' || this.process_status_display =='Running')){
      var now = new Date();
      now.setHours(now.getHours());
      var isPM = now.getHours() >= 12;
      var isMidday = now.getHours() == 12;
      var time = [now.getHours() - (isPM && !isMidday ? 12 : 0),
      now.getMinutes(),
      now.getSeconds() || '00'].join(':') +
        (isPM ? 'pm' : 'am');
      this.end_time = time;
      console.log(this.end_time,'stop time');
      let action='stop'; 
      let branch=0;
      let department=0;
      let id=this.id;
      let postData = {
        action:action,
        branch:branch,
        department:department,
        id:id,
        start_greige_production:this.start_greige_production
      }
      this.api.greige_production_log(postData,this.id).subscribe(
        data => {
          this.taka_no_flag = false;
      });
  }
  }

  getmachinedata(event){
    if(event && event.target.value){
    this.api.production_machine_data(event.target.value).subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
           this.machine_data = data['data']['results'];
           this.machine_master = data['data']['results'][0]['id'];
           console.log(this.machine_data);
           this.get_machine_detail();
        }
      })
  }
}
get_machine_greige(){
  this.api.get_machine_greige_detail(this.start_greige_production).subscribe(
    (data: any) => {
      if ((data['status'] == 200)) {
        console.log(data,'machine select data');
        this.machine_flag = true;
        this.greige_production_transaction_number = data['data']['greige_production_transaction_number'];
        this.greige_article_name = data['data']['greige_article_name'];
        this.operator = localStorage.getItem('username');
        this.course = data['data']['production_order_info']['course'];
        this.created_date = data['data']['created_date'];
        this.created_date = this.created_date.split('T');
        this.c_date = this.created_date[0]; 
        this.shift = data['data']['deleted'];
        this.start_greige_production = data['data']['id'];
        this.process_status_display = data['data']['process_status_display'];

      }

    })

}

}

