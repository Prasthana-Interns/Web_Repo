import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [    
                        {path:"auth",loadChildren:()=> import('./auth/auth.module').then((m)=>m.AuthModule)},
                        {path:'admin', loadChildren: () => import('./role-admin/role-admin.module').then((m) => m.RoleAdminModule)},
                        {path:'employee',loadChildren:()=> import('./role-employee/role-employee.module').then((m)=>m.RoleEmployeeModule)},  
                        {path:'core',loadChildren:()=>import('./core/core.module').then((m)=>m.CoreModule)}
                      ];
                                       
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
