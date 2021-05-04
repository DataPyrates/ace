import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:any;
password:any;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(){
  if (this.username=='rohan1' && this.password=='aes') {
    this.route.navigate(['/home']); 
  }
}

}
