import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpInterface } from '../employeeI';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private url='assets/emplist/emplistview.json';

  // for getting all devices..
  private deviceURL='http://13.251.95.54:3000/devices';

  // for getting approval =false..
  private approvedURL='http://13.251.95.54:3000/users/pending_users';

  // for getting employees..
  private employeeList_url='http://13.251.95.54:3000/users';



  constructor(private http_: HttpClient) { }
  
  getEmployees():Observable<EmpInterface[]>{
      return this.http_.get<EmpInterface[]>(this.url)
    }
  getEmployeById(id: any): Observable<EmpInterface[]>{
       return this.http_.get<EmpInterface[]>(this.url+'/'+id)
  }
  
  getToken() {
    return localStorage.getItem('token')
  }


  //Mayur fetchAllDevices
  getDevices(){
    return this.http_.get(this.deviceURL);
  }
  addDevice(body:any){
    return this.http_.post(this.deviceURL,body);
  }
  getApprovals(){
    return this.http_.get(this.approvedURL)
  }
  getListEmployee(){
    return this.http_.get(this.employeeList_url)
  }
  assignDeviceToEmployee(assignBody:any,id:any){
    console.log(id)
    return this.http_.put(this.deviceURL+"/"+id,assignBody)
  }
  acceptApproval(id:any,body:any){
    return this.http_.put(this.employeeList_url+"/"+id,body)
  }

}
