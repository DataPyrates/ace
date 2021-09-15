import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';
import { AlertController } from '@ionic/angular';
import {PopupService} from './../popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:any;
password:any;
  constructor(private route: Router,private api: ApiService, public popup: PopupService) { }

  ngOnInit(){}
  
  ionViewWillEnter() {
    this.username ='';
    this.password ='';
  }
  
  login(){
    if(this.username !=undefined && this.password !=undefined && this.username && this.password ){
      this.api.login(this.username,this.password).subscribe(
      (data :any )=> {
       if((data['status'] == 200)){
            // localStorage.clear();
            var department_first_index = data['data']['departments'].findIndex(x => x['name'] ==="Warp Knitting"); 
            let department = data['data']['departments'][department_first_index]['name'];
            localStorage.setItem('department',department);
            localStorage.setItem('user_data',JSON.stringify(data));
            localStorage.setItem('username',this.username);
            localStorage.setItem('access',data['data']['access']);
            localStorage.setItem('department_master',JSON.stringify(data['data']['departments']));
            localStorage.setItem('branch_master',JSON.stringify(data['data']['branches'][0]['id']));
            localStorage.setItem('branch_name',JSON.stringify(data['data']['branches'][0]['short_name']));
            localStorage.setItem('department_id',data['data']['default_department_id']); // department id defaut value set 
            this.unit_data();
            this.route.navigate(['/home']);
            
       }
      })
    }
    else{
      this.popup.showAlert('Login','Please Enter Username and Password !');
    }
  }

  unit_data() {
    // var machine_role = 2;
    this.api.get_unit_data().subscribe(
      (data: any) => {
        if ((data['status'] == 200)) {
          this.unit_data = data['data']['results'];
        }

      })
  }
}

