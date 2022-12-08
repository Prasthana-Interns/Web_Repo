import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleAdminRoutingModule } from './role-admin-routing.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';
import { RoleAdminInterceptor } from './role-admin.interceptor';
import { HttpRequestService } from './http-request.service';
<<<<<<< HEAD
import { UnassignedDevicesComponent } from './unassigned-devices/unassigned-devices.component';
import { CardComponent } from './card/card.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
=======
import { EmployeePopUpComponent } from './employee-pop-up/employee-pop-up.component';
import { CardComponent } from './card/card.component';


>>>>>>> dev

@NgModule({
  declarations: [
    AdminComponent,
    EmployeeListComponent,
    EmpDetailViewComponent,
    DevicesComponent,
    AddDeviceComponent,
    ApprovalsComponent,
<<<<<<< HEAD
    UnassignedDevicesComponent,
    CardComponent,
    AddEmployeeComponent
=======
    EmployeePopUpComponent,
    CardComponent,


>>>>>>> dev
  ],
  imports: [
    CommonModule,
    RoleAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
  ],
<<<<<<< HEAD
  providers: [HttpRequestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RoleAdminInterceptor,
      multi: true
    }], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
=======
  providers:[HttpRequestService,{  provide:HTTP_INTERCEPTORS,useClass:RoleAdminInterceptor,multi:true}],
  
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[]
>>>>>>> dev
  
})
export class RoleAdminModule { }
