import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public signInUrl="http://13.251.95.54:3000/users/signin"
  public signUpUrl="http://13.251.95.54:3000/users/signup"
  public resetPassUrl="http://13.251.95.54:3000/reset_password"


postEmp(body:any){
return this.http.post(this.signUpUrl,body)
}

getToken(){
  return localStorage.getItem('token')
}

logInEmp(body:any){
  return this.http.post(this.signInUrl,body)
}

resetPasswordEmp(body:any){
  return this.http.put(this.resetPassUrl,body)
}

}
