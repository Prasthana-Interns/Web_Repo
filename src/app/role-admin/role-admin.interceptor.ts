import { Injectable ,Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable()
export class RoleAdminInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let http=this.injector.get(HttpRequestService)
    let token = request.clone(
      {
      setHeaders: {
           Authorization:`${http.getToken()}`
         }
       }
      )
    return next.handle(token);
  }
}

// import { Injectable} from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { HttpRequestService } from './http-request.service';

// @Injectable()
// export class RoleAdminInterceptor implements HttpInterceptor {

//   constructor(public httpService:HttpRequestService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//     let token= request.clone(
//       {
//       setHeaders: {
//            Authorization:`${this.httpService.getToken()}`
//          }
//        }
//       )
//     return next.handle(token);
//   }
// }
 