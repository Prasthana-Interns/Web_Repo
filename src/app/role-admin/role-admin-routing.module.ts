import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';
<<<<<<< HEAD
import { UnassignedDevicesComponent } from './unassigned-devices/unassigned-devices.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
=======
import { EmployeePopUpComponent } from './employee-pop-up/employee-pop-up.component';
>>>>>>> dev


const routes: Routes = [{path:' ',redirectTo:'/EmployeeListComponent',pathMatch:'full'},
                         {path:'admin',component:AdminComponent,
                           children:[{ path: 'devices', component: DevicesComponent,
                                       children: [{ path: 'add-device', component: AddDeviceComponent },
                                                  { path: 'employeePopUp', component: EmployeePopUpComponent}]
                                     },
                                     { path: 'approvals', component: ApprovalsComponent },
<<<<<<< HEAD
                                     {
                                      path: 'employees', component: EmployeeListComponent,
                                      children: [{ path: 'add-employee', component: AddEmployeeComponent }]
                                     },
                                    { path: 'employees/:id', component: EmpDetailViewComponent,
                             children:[{path: 'unassigned-devices', component: UnassignedDevicesComponent}]},
                         ]
=======
                             { path: 'employees', component: EmployeeListComponent },
                             { path: 'employees/:id', component: EmpDetailViewComponent },
                            ]
                                     
>>>>>>> dev
                         },
                        ];

                              
                            
                             
                        
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAdminRoutingModule { }
