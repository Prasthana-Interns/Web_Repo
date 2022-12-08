import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public signInUrl="http://13.251.95.54:3000/users/signin"
  public signUpUrl="http://13.251.95.54:3000/users/signup"



postEmp(body:any){
return this.http.post(this.signUpUrl,body)
}
// setItem(){
//   return localStorage.setItem('token',this.body.user)
// }
getToken(){
  return localStorage.getItem('token');
}

logInEmp(body:any){
  return this.http.post(this.signInUrl,body)
}


}
