import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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
        alert("No active account found with the given credentials");
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

}
