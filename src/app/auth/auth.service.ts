import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient) { }
public baseurl="http://13.251.95.54:3000/"
getToken(){
  return localStorage.getItem('token')
}
put(url:any,body:any){
  return this.http.put(this.baseurl+url,body)
}
post(url:any,body:any){
  return this.http.post(this.baseurl+url,body)
}
// .pipe(catchError(this.handleError));
// handleError(err:any){
//   if(err instanceof HttpErrorResponse){}
//   else{}
//   return throwError(err);
  
// }
}


