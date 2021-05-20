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

  constructor(private route: Router, public menuCtrl: MenuController) {}

  ngOnInit() {
  }


  onMenuItemSelected(menuItem: MenuItem): void {
    if(menuItem.url){
      if(menuItem.url == 'login'){
        localStorage.clear();
      }
      this.route.navigate(['/'+menuItem.url+'']);
    }
  }
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
}