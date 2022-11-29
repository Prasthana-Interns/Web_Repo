import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpDetailViewComponent } from './emp-detail-view/emp-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DeviceListComponent,
    AddEmployeeComponent,
    EmpDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
