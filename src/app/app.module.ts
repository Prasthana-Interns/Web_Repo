import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Router } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AdminComponent } from './admin/admin.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    SignUpComponent,
    AddDeviceComponent,
    AdminComponent,
    ApprovalsComponent,
    DevicesComponent,
  
    // Router
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
