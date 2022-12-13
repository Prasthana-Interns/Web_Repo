import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './auth/login.interceptor';
import { RoleAdminModule } from './role-admin/role-admin.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    RoleAdminModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi:true
    }
    ],
  bootstrap:[AppComponent]
 
})
export class AppModule { }
