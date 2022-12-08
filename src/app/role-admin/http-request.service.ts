import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
import { EmpInterface } from '../employeeI';
import { identifierName } from '@angular/compiler';

>>>>>>> dev
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

<<<<<<< HEAD
  private employeeList_url = 'http://13.251.95.54:3000/users'

  
=======
  private url='assets/emplist/emplistview.json';

  // for getting all devices..
  private deviceURL='http://13.251.95.54:3000/devices';

  // for getting approval =false..
  private approvedURL='http://13.251.95.54:3000/users/pending_users';

  // for getting employees..
  private employeeList_url='http://13.251.95.54:3000/users';


>>>>>>> dev

  constructor(private http_: HttpClient) { }
  
  getEmployees() {
    return this.http_.get(this.employeeList_url)
    }
<<<<<<< HEAD
  getEmployeById(id: any) {
    console.log(this.http_.get('http://13.251.95.54:3000/users/'+id))
    return this.http_.get('http://13.251.95.54:3000/users/'+id)
    
  }
  addEmployee(body:any) {
    return this.http_.post('http://13.251.95.54:3000/users/singup',body)
=======
  getEmployeById(id: any): Observable<EmpInterface[]>{
       return this.http_.get<EmpInterface[]>(this.url+'/'+id)
>>>>>>> dev
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
