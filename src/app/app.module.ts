import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AdminComponent } from './admin/admin.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DevicesComponent } from './devices/devices.component';
import { CardComponent } from './card/card.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddDeviceComponent,
    AdminComponent,
    ApprovalsComponent,
    DevicesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers:[],
  bootstrap:[AppComponent]
 
})
export class AppModule { }
