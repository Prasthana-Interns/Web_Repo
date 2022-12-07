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
    let httpservice=this.injector.get(HttpRequestService)
    let jwtToken = request.clone({
      setHeaders: {
                   Authorization:` ${httpservice.getToken()}`
         }
       })
    return next.handle(jwtToken);
  }
}
 