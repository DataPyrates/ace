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

  public machine_data(machine_role) {
    return this.http.get(environment.apiURL + 'erp/api/masters/machine_number/?machine_type__machine_role=' + machine_role);
  }

}
