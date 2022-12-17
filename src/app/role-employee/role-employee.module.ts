import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleEmployeeRoutingModule } from './role-employee-routing.module';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
@NgModule({
    declarations: [
        EmployeeViewComponent,
        EditDetailsComponent,
    ],
    imports: [
        CommonModule,
        RoleEmployeeRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule        
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RoleEmployeeModule { }
