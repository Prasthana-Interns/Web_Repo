import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { DevicesComponent } from './devices/devices.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';


const routes: Routes = [
                        {path:'login',component:LoginComponent},
                        {path:'reset',component:ResetPasswordComponent},
                        {path:'signup',component:SignUpComponent},
                        {path:'admin',component:AdminComponent,
                          children:[
                            {path:'devices',component:DevicesComponent,
                            children:[{path:'add-device',component:AddDeviceComponent}]},
                            {path:'approvals',component:ApprovalsComponent},
                          ]
                        } 
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
