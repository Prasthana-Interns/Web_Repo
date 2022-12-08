import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {  Router } from '@angular/router';
=======
import {  Router, TitleStrategy } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms';
>>>>>>> dev
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  id: any
  constructor(private router: Router, private sevice: HttpRequestService) { }

  ngOnInit(): void {
 this. getEmployees()
  }
  getEmployees() {
    this.sevice.getEmployees().subscribe(response => {
      this.employees = response 
<<<<<<< HEAD
    })
=======

    localStorage.setItem('token',"sdfitr345")
      console.log("dfghjk")
    })

>>>>>>> dev
  }
  addEmployee() {
    this.router.navigate(['/admin/admin/employees/add-employee'])
  }
   empDetailView(emp: any) {
    console.log(emp)
    this.router.navigate(['/admin/admin/employees/',emp.id])
  }
  
}
