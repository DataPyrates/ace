import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {
   $(".username").html(localStorage.getItem('username'));
   var userdata= JSON.parse(localStorage.getItem('user_data'));
   console.log(userdata);
   $(".branch").html(userdata.data.branches[0]['short_name']);
   localStorage.setItem('department_master',JSON.stringify(userdata.data.departments));
   $(".department").html(userdata.data.departments[0]['name']);
   $(".department1").html(userdata.data.departments[1]['name']);
  }

  ionViewWillEnter(){
  var firstmenu = localStorage.getItem('firstmenu');
  var secondmenu = localStorage.getItem('secondmenu');
  if(firstmenu == 'open'){
  $(".menu_list .ion-color-primary:nth-child(1)").click();
  }
  if(secondmenu == 'open'){
  $(".menu_list .ion-color-primary:nth-child(2)").click();
  }
  }

}
