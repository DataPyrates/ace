import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:any;
password:any;
  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {
    this.username='';
    this.password='';
  }

  login(){
    if(this.username !=undefined && this.password !=undefined){
      this.api.login(this.username,this.password).subscribe(
      (data :any )=> {
       if((data['status'] == 200)){
            localStorage.clear();
            localStorage.setItem('user_data',JSON.stringify(data));
            localStorage.setItem('username',this.username);
            localStorage.setItem('access',data['data']['access']);
            this.route.navigate(['/home']);
       }
       else{
        alert(data[0]['msg']);
       }
      })
    }
    else{
      alert("Please Enter Username & Password");
    }
  }
}

