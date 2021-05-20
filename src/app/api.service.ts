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

  public get_machine_detail(machine_no) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_greige_production/?machine_master=' + machine_no,{'headers':headers});
  }
  public  greige_production_log_data(page) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_production_log/?action=table_list&page_size=10&page='+page,{'headers':headers});
  }

  public  inward_production_log_data(page) {
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_inward_production/?action=table_list&page_size=10&page='+page,{'headers':headers});
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

  public get_greige_inward_card(insert_roll_inventory_item,start_greige_production_machine) {
    let postData = {
      start_greige_production_machine: start_greige_production_machine,
      insert_roll_inventory_item: insert_roll_inventory_item
    }
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/greige_inward_production/',{'headers':headers,'params':postData});
  }

  public greige_production_log(postData){
    let headers = new HttpHeaders();
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
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
