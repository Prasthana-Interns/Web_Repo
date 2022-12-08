import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private employeeList_url = 'http://13.251.95.54:3000/users'

  

  constructor(private http_: HttpClient) { }
  
  getEmployees() {
    return this.http_.get(this.employeeList_url)
    }
  getEmployeById(id: any) {
    console.log(this.http_.get('http://13.251.95.54:3000/users/'+id))
    return this.http_.get('http://13.251.95.54:3000/users/'+id)
    
  }
  addEmployee(body:any) {
    return this.http_.post('http://13.251.95.54:3000/users/singup',body)
  }
  getToken() {
    return localStorage.getItem('token')
  }

}
