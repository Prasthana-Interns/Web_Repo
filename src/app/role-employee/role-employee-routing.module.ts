import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
                        {path:'employee-view',component:EmployeeViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleEmployeeRoutingModule { }
