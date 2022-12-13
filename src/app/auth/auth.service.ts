import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  constructor(private http:HttpClient) { }

  public signInUrl="http://13.251.95.54:3000/users/signin"
  public signUpUrl="http://13.251.95.54:3000/users/signup"
  public resetPassUrl="http://13.251.95.54:3000/reset_password"



postEmp(body:any){
return this.http.post(this.signUpUrl,body)
}


=======
constructor(private http:HttpClient) { }
public baseurl="http://13.251.95.54:3000/"
>>>>>>> 8e8d9326fb2efdac3bc5b320f53ae0398920ce92
getToken(){
  return localStorage.getItem('token')
}
put(url:any,body:any){
  return this.http.put(this.baseurl+url,body)
}
post(url:any,body:any){
  return this.http.post(this.baseurl+url,body)
}
}


