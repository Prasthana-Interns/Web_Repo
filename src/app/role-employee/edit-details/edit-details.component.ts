import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  constructor(private fb:FormBuilder,private employeeService:EmployeeService){}
  editForm:any;
  formHeader="Edit Details"
  showForm=false;
  employeeData:any
  localId:any;
  ngOnInit() {
    this.editForm=this.fb.group({
      name: new FormControl(null, [Validators.required,]),
      phoneNo: new FormControl(null, [Validators.required,  Validators.minLength(7), Validators.maxLength(7)]),
    })
  }
  getEmployeeById() {
    this.employeeService.get(`users/${this.localId}`).subscribe((res) => {
      this.employeeData=res;
    })
  }

  closeForm(){
    this.showForm=false;
  }
  saveDetails(){
    this.showForm=true;
     let body= { 
                  "user": {
                          "name":this.editForm.controls.name.value,
                          "phone_number": this.editForm.controls.phoneNo.value,
                        }
                }    
         }
}
