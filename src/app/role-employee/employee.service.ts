import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
  export class EmployeeService {

  constructor(private http:HttpClient) { }
  public baseurl="http://13.251.95.54:3000/"
 
  getToken(){
    return localStorage.getItem('token')
  }

  get(url:any){
    return this.http.get(this.baseurl+url)
  }
}
