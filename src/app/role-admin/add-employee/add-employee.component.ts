import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
 employees: any;
  addForm: any = false;
  laptop: any;
  id: any
  
  name:string="";
  email:any;
  phoneNo:number | undefined;
  designation:string="";
  approve:boolean=true;
  role=[];
 constructor(private sevice: HttpRequestService,private router:Router) { }

  addEmployeeForm: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    designation: new FormControl('', [Validators.required]),
  })

  dropDownList = [
    { item_id: 1, item_text: 'Employee' },
    { item_id: 2, item_text: 'Admin' },
  ]
  
  dropDownSettings = {
    idField: 'item_id',
    textField: 'item_text',
  }
   addEmployee() {
    this.addForm = false;
    let body= { 
                 "user": {
                         "name": this.name,
                         "phone_number": this.phoneNo,
                         "designation":this.designation,
                         "email": this.email,
                         "approved": this.approve,
                         "roles":this.role,           
                         }
              }
     this.sevice.addEmployee(body).subscribe((res:any)=>{
     })
     this.router.navigate(['admin/admin/employees'])
  }
  cancelForm() {
  this.router.navigate(['admin/admin/employees'])
  }

}
