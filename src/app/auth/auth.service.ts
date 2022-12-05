import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public url="http://54.169.0.80:3000/users/signin"

  postEmp(body:any){
  return this.http.post(this.url,body)
}

}
