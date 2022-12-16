import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http:HttpClient) { }
  public baseurl="http://13.251.95.54:3000/"
  getToken(){
    return localStorage.getItem('token')
  }
  post(url:any,body:any){
    return this.http.post(this.baseurl+url,body)
  }
}
