import { Injectable ,Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequestService } from './role-admin/http-request.service';

@Injectable()
export class RoleAdminInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let http=this.injector.get(HttpRequestService)
    let tokenizedReq = request.clone({
      setHeaders: {
           Authorization:`Barrer ${http.getToken()}`
         }
       })

    
    return next.handle(tokenizedReq);
  }
}
