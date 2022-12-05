import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpInterface } from '../employeeI';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private url='assets/emplist/emplistview.json'

  constructor(private http_: HttpClient) { }
  
  getEmployees():Observable<EmpInterface[]>{
      return this.http_.get<EmpInterface[]>(this.url)
    }
  getEmployeById(id: any): Observable<EmpInterface[]>{
       return this.http_.get<EmpInterface[]>(this.url+'/'+id)
      // return this.http_.get<EmpInterface[]>('http://localhost:53724/admin/employees/'+id)
  }
  
  getToken() {
    return localStorage.getItem('token')
  }

}
