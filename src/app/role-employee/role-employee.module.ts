import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleEmployeeRoutingModule } from './role-employee-routing.module';
import { EmployeeViewComponent } from './employee-view/employee-view.component';


@NgModule({
  declarations: [
    EmployeeViewComponent
  ],
  imports: [
    CommonModule,
    RoleEmployeeRoutingModule
  ]
})
export class RoleEmployeeModule { }
