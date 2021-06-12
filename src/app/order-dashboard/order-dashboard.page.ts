import { Component, OnInit, TemplateRef, ViewChild,AfterViewInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router,NavigationExtras } from '@angular/router';
import { JwPaginationModule } from 'jw-angular-pagination';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.page.html',
  styleUrls: ['./order-dashboard.page.scss'],
})
export class OrderDashboardPage implements OnInit {
  page: number;
  order_data=[];
  total:any;
  modalRef: BsModalRef;
    @ViewChild('template') templateRef: TemplateRef<any>;
  sales: any;
  constructor(private route: Router,private api: ApiService,public modalService: BsModalService) { }

  ngOnInit() {
    this.sales_order_data(1);
    this.modalService.onHide.subscribe((e) => {
      console.log('close',this.modalService.config.initialState);
  });
  }
  sales_order_data(page){
    this.page=page;  
    // let start_greige_production__machine_master__number__icontains = this.term;
     this.api.fabric_order_data(this.page).subscribe(
     (data :any )=> {
      if((data['status'] == 200)){
       var month = new Array();
       month[0] = "January";
       month[1] = "February";
       month[2] = "March";
       month[3] = "April";
       month[4] = "May";
       month[5] = "June";
       month[6] = "July";
       month[7] = "August";
       month[8] = "September";
       month[9] = "October";
       month[10] = "November";
       month[11] = "December";
        this.order_data=data['data']['results'];
        this.total = data['data']['count'];
        for(let i= 0;i<this.order_data.length;i++){
         var c_date = this.order_data[i]['created_date'];
         var today = new Date(c_date);
         var dd = today.getDate();
         var mm = month[today.getMonth()];
         var year = today.getFullYear();
         this.order_data[i]['created_date'] = dd+'-'+mm+'-'+year;
        }
      }
     
     })
   }

   pageChanged(event){
    this.sales_order_data(event);
   }
  //  ngAfterViewInit() {
  //   const user = {
  //       id: 10
  //     };
  //   this.modalRef = this.modalService.show(this.templateRef, {
  //     initialState : user
  //   });
  // }
   openModal(template: TemplateRef<any>,sales) {
     this.sales = sales;
    const user = {
      id: 10
    };
    this.modalRef = this.modalService.show(template, {
       initialState : user
    });
  }
  
}
