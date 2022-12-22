
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
id = sessionStorage.getItem('id');
role: any;
isEdit: boolean = false;
isSave: boolean = false;
hasEditSymbol: boolean = true;
noDevicesAssigned = false;
errorText: any;
errorResponse: any;
Response1: any;
hasError: boolean = false
hasCharctersError = false;

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
      if (this.employeeData.devices.length == 0) {
           this.noDevicesAssigned = true
      }
      if (this.employeeData?.user_roles.length == 2) {
                  {
                       console.log(this.employeeData?.user_roles)
                       this.employeeData?.user_roles.map((res:any) => {
                       if(res === 'Admin') this.role = res                            
                       })
                  }
      }
      else this.role = 'Employee'
      this.hasError=false
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
     this.isEdit = false;
     this.isSave = false;
     this.hasEditSymbol = true;   
}
 saveEmployee() {
    if (this.editForm.valid) {
     this.isSave = false
     let body = {
     "user": {
     "name": this.editForm?.controls?.name.value,
     "phone_number": this.editForm?.controls?.phoneNo.value,
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
                if (this.errorResponse === "Validation failed: Name is invalid") {
                    this.Response1 = "*Name is invalid"
                    this.hasError=true
                    this.isSave = true
                    this.isEdit = true;  
               }
                else if (this.errorResponse === "Validation failed: Phone number has already been taken" ) {
                    this.Response1 = "*Phone Number already exists"
                    this.hasError=true
                    this.isSave = true
                    this.isEdit = true;   
               }

               else if (this.errorResponse==="Validation failed: Phone number is the wrong length (should be 10 characters)") {
                    this.Response1 = "*PhoneNo. is invalid"
                    this.hasError=true
                    this.isSave = true
                    this.isEdit = true; 
               }
               else if(this.errorResponse==="Validation failed: Name is invalid, Phone number has already been taken" ){
                    this.Response1 = "Name is invalid & Phone Number already exists"
                     this.hasError=true
                    this.isSave = true
                    this.isEdit = true; 
               }
               else if (this.errorResponse==="Validation failed: Name is invalid, Phone number is the wrong length (should be 10 characters)") {
                    this.Response1 = "*Name is invalid & PhoneNo. is invalid"
                     this.hasError=true
                    this.isSave = true
                    this.isEdit = true; 
               }
               }         
               });
            }
          
     }
}
