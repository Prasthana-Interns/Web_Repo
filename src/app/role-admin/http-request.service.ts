import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpInterface } from '../employeeI';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  message:any;
  private url='assets/emplist/emplistview.json';

  private domain_url='http://13.251.95.54:3000/';



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
  get(url?:any,body?:any){
    return this.http_.get(this.domain_url+url,body);
  }
  post(url?:any,body?:any){
    return this.http_.post(this.domain_url+url,body);
  }
  put(url?:any,body?:any,){
    return this.http_.put(this.domain_url+url,body)
  }
  setShareData(data:any){
    this.message=data;
  }
  getShareData(){
    return this.message;
  }
  delete(url?:any,id?:any){
    console.log(id)
    console.log(url)
    console.log(this.domain_url+url+'/'+id)
    return this.http_.delete(this.domain_url+url+'/'+id)
  }
}
