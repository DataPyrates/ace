import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'; 
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(username,password){
    let postData =  {
      username: username,
      password: password      
    }
    return this.http.post(environment.apiURL+'api-token/',postData);
  }
}
