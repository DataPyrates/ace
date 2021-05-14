import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-add-inward-production',
  templateUrl: './add-inward-production.page.html',
  styleUrls: ['./add-inward-production.page.scss'],
})
export class AddInwardProductionPage implements OnInit {
id:any;
inward_data:any;
operator_name:any;
quantity:any;
greige_color_name:any;
greige_article_name:any;
greige_production_order_transaction_number:any;
view:boolean = false;
machine_number:any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    if(this.id){
      this.view = true;
      this.inward_data_log_view();
    }
  }

  inward_data_log_view(){
    if (this.id) {
      this.api.inward_production_log_view(this.id).subscribe(
        data => {
          this.inward_data = data;
          console.log(this.inward_data);
          this.operator_name = data ['data']['operator_name'];
          this.quantity=data['data']['production_info']['quantity'];
          this.greige_color_name=data['data']['production_info']['greige_color_name'];
          this.greige_article_name=data['data']['production_info']['greige_article_name'];
          this.greige_production_order_transaction_number=data['data']['production_info']['greige_production_order_transaction_number'];
          this.machine_number=data ['data']['machine_info']['machine_number'];
        })
    }
  }


}
