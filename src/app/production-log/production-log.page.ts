import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-log',
  templateUrl: './production-log.page.html',
  styleUrls: ['./production-log.page.scss'],
})
export class ProductionLogPage implements OnInit {
  secondgrid:boolean=false;
  constructor() { }

  ngOnInit() {

  }
  opengrid(){
this.secondgrid=true;
  }
}
