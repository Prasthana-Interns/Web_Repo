import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleAdminRoutingModule } from './role-admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgSelectModule } from '@ng-select/ng-select';

import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';

@NgModule({
  declarations: [
    AdminComponent,
    EmployeeListComponent,
    EmpDetailViewComponent,
    DevicesComponent,
    AddDeviceComponent,
    DeviceListComponent,
    ApprovalsComponent,


  ],
  imports: [
    CommonModule,
    RoleAdminRoutingModule,
    ReactiveFormsModule,
    // NgSelectModule

  ],
  exports:[DeviceListComponent]
  
})
export class RoleAdminModule { }
