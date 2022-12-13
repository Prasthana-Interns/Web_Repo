import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleEmployeeRoutingModule } from './role-employee-routing.module';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { CoreModule } from '../core/core.module';
import { CardComponent } from '../core/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EmployeeViewComponent,
    CardComponent,
    EditDetailsComponent
  ],

  imports: [
    CommonModule,
    RoleEmployeeRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule
  
  ]
})
export class RoleEmployeeModule { }
