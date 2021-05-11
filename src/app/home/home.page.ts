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
   $(".department").html(userdata.data.departments[0]['name']);

  }

}
