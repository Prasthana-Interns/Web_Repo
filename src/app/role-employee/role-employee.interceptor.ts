import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
@Injectable()
export class RoleEmployeeInterceptor implements HttpInterceptor {

  constructor(private employeeService:EmployeeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=request.clone({
   setHeaders:{

     Autherization:`${this.employeeService.getToken()}`

 }})
   return next.handle(token);
 }
}
