import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import {FormArray, FormBuilder, FormControl,Validators} from '@angular/forms';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  implements OnInit {
  addForm: any = false;
  id: any;
  addEmployeeForm: any;
  approve:boolean=true;
 constructor(private sevice: HttpRequestService,private router:Router,private fb: FormBuilder) { }

  dropdownList = [
    { item_id: 1, item_text: 'Employee'},
    { item_id: 2, item_text: 'Admin'},
  ];
  dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: true,
  };
  
  ngOnInit() {
    this.addEmployeeForm =  this.fb.group ({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
    role:new FormArray([new FormControl(null)])
      
  })
  }
   addEmployee() {
     this.addForm = false;
     if(this.addEmployeeForm.valid){
       let body = {
         "user": {
           "name": this.addEmployeeForm.controls.name.value,
           "phone_number": this.addEmployeeForm.controls.name.value,
           "designation": this.addEmployeeForm.controls.name.value,
           "email": this.addEmployeeForm.controls.name.value,
           "approved": this.approve,
         },
        //  "roles": this.addEmployeeForm.controls.name.value,
         "roles":null
       }
     this.sevice.addEmployee(body).subscribe((res:any)=>{  })
     this.router.navigate(['admin/admin/employees'])
     }
   }
  cancelForm() {
  this.router.navigate(['admin/admin/employees'])
  }

}
