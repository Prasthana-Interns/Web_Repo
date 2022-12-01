import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DevicesComponent } from './devices/devices.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';


const routes: Routes = [                       
                        {path:'admin',component:AdminComponent,
                          children:[
                            {path:'devices',component:DevicesComponent,
                            children:[{path:'add-device',component:AddDeviceComponent}]},
                            {path:'approvals',component:ApprovalsComponent},
                          ]
                        }, 
                        {path:"auth",loadChildren:()=> import('./auth/auth.module').then((m)=>m.AuthModule)},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
