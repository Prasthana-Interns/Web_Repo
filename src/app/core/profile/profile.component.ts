
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../../role-admin/http-request.service';

@Component({
selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 employeeData: any;
     id = localStorage.getItem('id');
     role: any;
 isEdit: boolean = false;
    isSave: boolean = false;
  hasEditSymbol: boolean = true;
     noDevicesAssigned = false;
       errorText: any;
  errorResponse: any;
  Response: any;
   

 public editForm: any;
 constructor(private httpService: HttpRequestService, private fb: FormBuilder) { }
 
 ngOnInit() {
 this.getProfile();
 }
 getProfile() {
 this.httpService.get(`users/${this.id}`).subscribe((res) => {
 console.log(res)
 if (res) {
      this.employeeData = res
       if (this.employeeData.devices.length == 0)
      { this.noDevicesAssigned = true }

      if (this.employeeData?.user_roles.length == 2) {
                  {
                       console.log(this.employeeData?.user_roles)
                       this.employeeData?.user_roles.map((res:any) => {
                            if(res === 'Admin') this.role = res 
                            
                       })
                  }
      }
      else this.role = 'Employee'
     this.formControls()
 };
 })
 }
 formControls() {
 console.log(this.employeeData)
 this.editForm = this.fb.group({
 name: new FormControl(this.employeeData.name, [Validators.required, Validators.minLength(3)]),
 phoneNo: new FormControl(this.employeeData.phone_number, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
})
 }
editEmployee() {
 this.isEdit = true;
      this.isSave = true;
      this.hasEditSymbol = false;
     }
     cancelChanges() {
          this.getProfile()
           this.isSave = false
            this.isEdit = false;
            this.hasEditSymbol = true;   
     }
 saveEmployee() {
 if (this.editForm.valid) {
 this.isSave = false
 if (this.editForm.valid) {
 let body = {
"user": {
 "name": this.editForm.controls.name.value,
 "phone_number": this.editForm.controls.phoneNo.value,
 }
 }
      this.httpService.put(`users/${this.employeeData.id}`, body).subscribe({
           next:(res: any) => {
  this.getProfile()
            this.isEdit = false;
            this.hasEditSymbol = true;
           },
           error: (err: any) => {
                this.errorText = err
                this.errorResponse = this.errorText?.error?.error
                if (this.errorResponse === "Validation failed: Phone Numbr has already exists") {
                     this.Response = "*Phone Number already exists"
                }
           }
           
      }
 );
 }
 }
 }
}
