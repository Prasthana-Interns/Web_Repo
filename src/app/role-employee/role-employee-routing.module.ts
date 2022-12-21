import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {path:'employee-profile',component:EmployeeProfileComponent}                   
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleEmployeeRoutingModule { }
