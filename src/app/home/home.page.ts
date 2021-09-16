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
   var department_first_index = userdata.data.departments.findIndex(x => x['name'] ==="Warp Knitting"); 
   if(department_first_index != '-1'){
   $(".department").html(userdata.data.departments[department_first_index]['name']);
   }
   if(userdata.data.departments.length >1){
    var department_second_index = userdata.data.departments.findIndex(x => x['name'] ==="Trading"); 
   if(department_second_index != '-1'){
   $(".department1").html(userdata.data.departments[department_second_index]['name']);
   }
  }
  var department_second_index = userdata.data.departments.findIndex(x => x['name'] ==="WK"); 
  if(department_second_index != '-1'){
  $(".department2").html(userdata.data.departments[department_second_index]['name']);
  }
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
