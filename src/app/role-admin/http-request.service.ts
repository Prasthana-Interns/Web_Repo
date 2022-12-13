import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private domain_url = 'http://13.251.95.54:3000/'
  private employeeList_url = 'http://13.251.95.54:3000/users'
  private deviceURL = 'http://13.251.95.54:3000/devices';  
  private approvedURL = 'http://13.251.95.54:3000/users/pending_users';
  message: any;

  constructor(private http_: HttpClient) { }
  //employee api calls


  getToken() {
    let tok = localStorage.getItem('token')

    return localStorage.getItem('token')
  }
  get(url: any) {
    return this.http_.get(this.domain_url+ url)
  }
  post(url: any, body?:any) {
    return this.http_.post(this.domain_url +url, body)
  }
  put(url: any, body?: any) {
    return this.http_.put(this.domain_url + url, body);
  }
  delete(url:any,id:any) {
    return this.http_.delete(this.domain_url+url+"/"+id)
  }
  setShareData(data: any) {
    this.message = data;
  }
  getShareData() {
    return this.message;
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
