import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpInterface } from '../employeeI';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private url='assets/emplist/employeeListView.json'

  constructor(private http_: HttpClient) { }
  
  getEmployees():Observable<EmpInterface[]>{
      return this.http_.get<EmpInterface[]>(this.url)
    }
  getEmployeById(id: any): Observable<EmpInterface[]>{
    return this.http_.get<EmpInterface[]>(this.url + '/' + id)
  }
  addEmployee(body:any) {
    return this.http_.post(this.url,body)
  }
  getToken() {
    return localStorage.getItem('token')
  }

}
