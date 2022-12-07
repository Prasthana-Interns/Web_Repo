import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RoleAdminModule } from './role-admin/role-admin.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';



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
    FormsModule 
  ],
  providers:[],
  bootstrap:[AppComponent]
 
})
export class AppModule { }
