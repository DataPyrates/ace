import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {PopupService} from '../app/popup.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,public popup:PopupService) { }

 

  public login(username, password) {
    let postData = {
      username: username,
      password: password
    }
    return this.http.post(environment.apiURL + 'api-token/', postData).pipe(map((res: Response) => {
      return res;
    })).pipe(catchError((error: any) => {
      if (error.status === 500) {
        return throwError(new Error(error.status));
      }
      else if (error.status === 401) {
        this.popup.showAlert('Login','No active account found with the given credentials');
      }
    }));
  }

  public get_machine_data(machine_role) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/machine_number/?machine_type__machine_role=' + machine_role,{'headers':headers});
  }

  public order_design_master_data() {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/design_master/',{'headers':headers});
  }
  public order_currency_data() {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/currency/',{'headers':headers});
  }

  public order_client_data(name__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/company_ledger/?active=true&client_status=true&name__icontains='+name__icontains,{'headers':headers});
  }

  public order_sales_data(first_last_name_contains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/user/?is_active=true&first_last_name_contains='+first_last_name_contains,{'headers':headers});
  }

  public order_address_data(first_last_name_contains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/delivery_address/?active=true&company_ledger=218&branch_isnull=true&company_ledger_isnull=false&delivery_name__icontains='+first_last_name_contains,{'headers':headers});
  }

  public order_transport_data(first_last_name_contains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/transport/?active=true&name__icontains='+first_last_name_contains,{'headers':headers});
  }

  public order_article_data(id__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/design_master/?action=table_list&active=true&id__icontains='+id__icontains,{'headers':headers});
  }

  public order_quality_data(name__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/quality_master/?action=table_list&active=true&name__icontains='+name__icontains,{'headers':headers});
  }

  public order_article_details_data(name__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/design_master/'+name__icontains+'/',{'headers':headers});
  }

  public order_design_data() {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/design_master/',{'headers':headers});
  }

  public order_chart_data(quality_master,article_code,name__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/chart_master/?active=true&quality_master='+quality_master+'&design_master='+article_code+'&name__icontains='+name__icontains,{'headers':headers});
  }

  public order_chart_details_data(chart_master) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/chart_master/'+chart_master+'/',{'headers':headers});
  }

  public order_color_data(quality_master,article_code,chart_master,name__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/fabric_color_master/?active=true&quality_master'+quality_master+'&design_master='+article_code+'&chart_master='+chart_master+'&name__icontains='+name__icontains,{'headers':headers});
  }

  public order_color_details_data(color_master) {
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/fabric_color_master/'+color_master+'/',{'headers':headers});
  }

  public get_machine_detail(machine_no) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_greige_production/?machine_master=' + machine_no,{'headers':headers});
  }
  public  greige_production_log_data(page,start_greige_production__machine_master__number__icontains) {
  let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));   
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_production_log/?action=table_list&page_size=10&page='+page+'&start_greige_production__machine_master__number__icontains='+start_greige_production__machine_master__number__icontains,{'headers':headers});
    
  }

  public fabric_order_data(page){
    let headers = new HttpHeaders();
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    console.log(headers);
    return this.http.get(environment.apiURL + 'erp/api/transactions/fabric_sales_order/?action=table_list&page_size=10&page='+page,{'headers':headers});
  }

  public  inward_production_log_data(page,start_greige_production_machine__machine_master__number__icontains) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_inward_production/?action=table_list&page_size=10&page='+page+'&start_greige_production_machine__machine_master__number__icontains='+start_greige_production_machine__machine_master__number__icontains,{'headers':headers});
  }

  public  inward_production_log_view(id) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_inward_production/'+id+'/',{'headers':headers});
  }

  public  production_log_view(id) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_production_log/'+id+'/',{'headers':headers});
  }

  public machine_data(page){
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/machine_number/?action=table_list&page_size=10&page='+page,{'headers':headers});
  }

  public get_inward_data(process_status) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_greige_production/?process_status=' + process_status,{'headers':headers});
  }
  
  public get_machine_master(machine_master) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_greige_production/?machine_master=' + machine_master,{'headers':headers});
  }

  public get_qr_data(inward_from_production_id) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/wk_inventory/?inward_from_production_id=' + inward_from_production_id,{'headers':headers});
  }

  public greige_inward_save(id,process_status) {
    let post = {
      id:id,
      process_status:process_status
    }
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.post(environment.apiURL + 'erp/api/transactions/greige_inward_production/'+id+'/',post,{'headers':headers});
  }

  public get_greige_inward_card(postData) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.post(environment.apiURL + 'erp/api/transactions/greige_inward_production/',postData,{'headers':headers}).pipe(map((res: Response) => {
      return res;
    })).pipe(catchError((error: any) => {
      console.log(error);
      if (error.status === 500) {
        return throwError(new Error(error.status));
      }
      else if (error.message) {
        this.popup.showAlert('Error',error.error.message);
      }
    }));
  }

  public greige_inward_roll_inventory(postData) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.post(environment.apiURL + 'erp/api/transactions/greige_inward_roll_inventory/',postData,{'headers':headers}).pipe(map((res: Response) => {
      return res;
    })).pipe(catchError((error: any) => {
      console.log(error);
      if (error.status === 500) {
        return throwError(new Error(error.status));
      }
      else if (error.message) {
        this.popup.showAlert('Error',error.error.message);
      }
    }));
  }

  public greige_production_log(postData,id){
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    if(id){
      return this.http.patch(environment.apiURL + 'erp/api/transactions/greige_production_log/'+id+'/',postData,{'headers':headers}).pipe(map((res: Response) => {
        return res;
      })).pipe(catchError((error: any) => {
        console.log(error);
        if (error.status === 500) {
          return throwError(new Error(error.status));
        }
        else if (error.message) {
          this.popup.showAlert('Error',error.error.message);
        }
      }));
    }
    else{
    return this.http.post(environment.apiURL + 'erp/api/transactions/greige_production_log/',postData,{'headers':headers}).pipe(map((res: Response) => {
      return res;
    })).pipe(catchError((error: any) => {
      console.log(error);
      if (error.status === 500) {
        return throwError(new Error(error.status));
      }
      else if (error.message) {
        this.popup.showAlert('Error',error.error.message);
      }
    }));
  }
  }

  public greige_production_log_details(postData){
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.post(environment.apiURL + 'erp/api/transactions/greige_production_log_details/',postData,{'headers':headers}).pipe(map((res: Response) => {
      return res;
    })).pipe(catchError((error: any) => {
      console.log(error);
      if (error.status === 500) {
        return throwError(new Error(error.status));
      }
      else if (error.message) {
        this.popup.showAlert('Error',error.error.message);
      }
    }));
  }
}
