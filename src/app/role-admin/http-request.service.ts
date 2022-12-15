import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private domain_url = 'http://13.251.95.54:3000/'
  message: any; 

  constructor(private http_: HttpClient) { }


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
    return this.http_.delete(this.domain_url+url+'/'+id)
  }
}
