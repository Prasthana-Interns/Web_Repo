import { Component, OnInit } from '@angular/core';
import {  Router, TitleStrategy } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpRequestService } from '../http-request.service';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  addForm: any = false;
  laptop: any;
  id:any


  constructor(private router: Router, private sevice: HttpRequestService) { }
  
  addEmploye: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    designation: new FormControl('', [Validators.required]),
  })

  dropDownList = [
    { item_id: 1, item_text: 'Employee' },
    { item_id: 2, item_text: 'Admin' },
  ];
  dropDownSettings = {
    idField: 'item_id',
    textField: 'item_text',
   
  };
  ngOnInit(): void {
 this. getEmployees()
  }

  getEmployees() {
    this.sevice.getEmployees().subscribe(response => {
      this.employees = response 

    localStorage.setItem('token',"sdfitr345")
      console.log("dfghjk")
    })

  }
  
  addEmpoyee() {
    this.addForm = true
  }
  empDetailView(emp: any) {
    console.log(emp)
 
    this.router.navigate(['/admin/admin/employees/',emp.id])
  }
  saveAddEmployee() {
  this.addForm=false
}
  
}
