import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleAdminRoutingModule } from './role-admin-routing.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgConfirmModule, NgConfirmService} from 'ng-confirm-box';
import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';
import { RoleAdminInterceptor } from './role-admin.interceptor';
import { HttpRequestService } from './http-request.service';
import { UnassignedDevicesComponent } from './unassigned-devices/unassigned-devices.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeePopUpComponent } from './employee-pop-up/employee-pop-up.component';
import { CoreModule } from '../core/core.module';
import { PopupParentComponent } from './popup-parent/popup-parent.component';
// import { FooterComponent } from '../core/footer/footer.component';
@NgModule({
  declarations: [
    AdminComponent,
    EmployeeListComponent,
    EmpDetailViewComponent,
    DevicesComponent,
    AddDeviceComponent,
    AddEmployeeComponent,
    UnassignedDevicesComponent,
    ApprovalsComponent,
    EmployeePopUpComponent,
    PopupParentComponent,
  ],

  imports: [
    CommonModule,
    RoleAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule, 
    CoreModule,
    NgConfirmModule
  ],
  
    providers:[HttpRequestService,{  provide:HTTP_INTERCEPTORS,useClass:RoleAdminInterceptor,multi:true},NgConfirmService],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
    ],
    exports:[]
  
})
export class RoleAdminModule { }
