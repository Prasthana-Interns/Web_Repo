import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(public authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
     const token=request.clone({
    setHeaders:{
      Autherization:`${this.authService.getToken()}`
  }})
    return next.handle(token);
  }
}
