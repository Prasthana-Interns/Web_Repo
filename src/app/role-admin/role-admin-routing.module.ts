import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';
import { UnassignedDevicesComponent } from './unassigned-devices/unassigned-devices.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeePopUpComponent } from './employee-pop-up/employee-pop-up.component';
// import { ProfileComponent } from '../core/profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { PopupParentComponent } from './popup-parent/popup-parent.component';

const routes: Routes = [{path:' ',redirectTo:'/EmployeeListComponent',pathMatch:'full'},
                         {path:'admin',component:AdminComponent,
                           children:[{ path: 'devices', component: DevicesComponent,
                                       children: [
                                                  { path: 'employeePopUp', component: EmployeePopUpComponent}]
                                     },
                                     { path: 'add-device', component: AddDeviceComponent},

                                     { path: 'approvals', component: ApprovalsComponent },
                                     {
                                      path: 'employees', component: EmployeeListComponent,
                                      children: [{ path: 'add-employee', component: AddEmployeeComponent },
                                        { path: 'popup-parent', component: PopupParentComponent}
                                      ]
                                     },
                                     { path: 'employees/:id', component: EmpDetailViewComponent },                                    
                                     { path: 'unassigned-devices', component: UnassignedDevicesComponent },
                                     { path:'profile', component: AdminProfileComponent },
                                 ]                                     
                         }];
                  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAdminRoutingModule { }
