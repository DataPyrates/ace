import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import * as $ from "jquery";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Input() isRoot: boolean;

  isOpen = false;
  department: string;

  constructor(private route: Router, public menuCtrl: MenuController) {}

  ngOnInit() {
    this.department = localStorage.getItem('department')?localStorage.getItem('department'):'Warp Knitting';
  }

  onMenuItemSelected(menuItem: MenuItem): void {
    if(menuItem.url){
      if(menuItem.url == 'login'){
        localStorage.setItem('username','');
      }
      this.route.navigate(['/'+menuItem.url+'']);
    }
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  
  openclosedmenu(name){
    console.log(name);
    if(name == 'Commmon Master'){
    var firstmenu = localStorage.getItem('firstmenu');
    if(firstmenu == 'open'){
      localStorage.setItem('firstmenu','closed');
    }
    else{
      localStorage.setItem('firstmenu','open');
    }
    }
    else if(name == 'Transaction'){
      var secondmenu = localStorage.getItem('secondmenu');
      if(secondmenu == 'open'){
        localStorage.setItem('secondmenu','closed');
      }
      else{
        localStorage.setItem('secondmenu','open');
      }
    }
  }
}