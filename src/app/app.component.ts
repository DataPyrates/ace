import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from '../assets/data/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private menu = menuItems;
  constructor(private route: Router) {
  }

}
