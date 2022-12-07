import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpInterface } from '../employeeI';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private url='assets/emplist/emplistview.json';

  // for getting all devices
  private deviceURL='http://13.251.95.54:3000/devices';



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


  //Mayur fetchAllDevices
  getDevices(){
    return this.http_.get(this.deviceURL);
  }
  addDevice(body:any){
    return this.http_.post(this.deviceURL,body)
  }
}
