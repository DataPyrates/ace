import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarpingService {

  constructor(private http: HttpClient) { }

  public warping_production_log_data(page,machine_master__number__icontains){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_warping_production/?action=table_list&page_size=10&page='+page+'&machine_master__number__icontains='+machine_master__number__icontains,{'headers':headers});
  }

  public inward_warp_inward_production_log_data(page){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/warping_inward_production/?action=table_list&page_size=10&page='+page,{'headers':headers});
  }

  public wrap_machine_data(transaction_number__icontains){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/warping_production_order/?transaction_status=1&schedule_status=2&bom_status=2&start_wpr_machine_isnull=true&transaction_number__icontains='+transaction_number__icontains,{'headers':headers});
  } 
  
  public wrap_allmachine_data(id){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/warping_production_order/'+id+'/',{'headers':headers});
  } 

  public warp_inward_machine_data(transaction_number__icontains){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/masters/machine_number/?machine_type__machine_role=1&number__icontains='+transaction_number__icontains,{'headers':headers});
  } 

  public warp_inward_machine_master_data(machine_master){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_warping_production/?machine_master='+machine_master+'&production_order__transaction_status=1&process_status=0',{'headers':headers});
  }

  public wrapinward_allmachine_data(id){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_warping_production/'+id+'/',{'headers':headers});
  } 

  public new_set_data(){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/warping_production_set/',{'headers':headers});
  }

  public start_warping_production_view(id){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_warping_production/'+id+'/',{'headers':headers});
  }


}
