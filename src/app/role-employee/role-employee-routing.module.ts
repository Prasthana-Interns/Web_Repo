import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
// import { EditDetailsComponent } from './edit-details/edit-details.component';
// import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {path:'employee-profile',component:EmployeeProfileComponent}
                        // {path:'employee-view',component:EmployeeViewComponent,
                        // children:[  {path:'editEmployee', component:EditDetailsComponent}]}
                      
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleEmployeeRoutingModule { }
