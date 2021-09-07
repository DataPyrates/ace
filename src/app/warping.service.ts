import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarpingService {

  constructor(private http: HttpClient) { }

  public warping_production_log_data(page){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/start_warping_production/?action=table_list&page_size=10&page='+page,{'headers':headers});
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
    return this.http.get(environment.apiURL + 'erp/api/transactions/warping_production_order/?transaction_status=1&schedule_status=2&bom_status=2&start_gpr_machine_isnull=true&transaction_number__icontains='+transaction_number__icontains,{'headers':headers});
  } 
  
  public wrap_allmachine_data(id){
    let headers = new HttpHeaders();
    headers=headers.append('branch',localStorage.getItem('branch_master'));
    headers=headers.append('department',localStorage.getItem('department_id'));
    headers=headers.append('Authorization','Bearer '+localStorage.getItem('access'));
    return this.http.get(environment.apiURL + 'erp/api/transactions/warping_production_order/'+id+'/',{'headers':headers});
  } 

}
