import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './role-admin/admin/admin.component';
import { DevicesComponent } from './role-admin/devices/devices.component';
import { AddDeviceComponent } from './role-admin/add-device/add-device.component';
import { ApprovalsComponent } from './role-admin/approvals/approvals.component';
import { EmployeeListComponent } from './role-admin/employee-list/employee-list.component';

import { EmpDetailViewComponent } from './role-admin/emp-detail-view/emp-detail-view.component';


const routes: Routes = [
                        {path:'login',component:LoginComponent},
                        {path:'reset',component:ResetPasswordComponent},
                        {path:'signup',component:SignUpComponent},

                        {path: 'admin', loadChildren: () => import('./role-admin/role-admin.module').then(m => m.RoleAdminModule)}
                        ];
                                     
                 
                        
      
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
