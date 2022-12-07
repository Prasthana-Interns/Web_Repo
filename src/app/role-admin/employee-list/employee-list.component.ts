import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
    localStorage.setItem('token',"sdfitr345")
      console.log("dfghjk")
      localStorage.setItem("key","123")
    })
  }
  addEmployee() {
    this.router.navigate(['/admin/admin/employees/add-employee'])
  }
   empDetailView(emp: any) {
    console.log(emp)
    this.router.navigate(['/admin/admin/employees/',emp.id])
  }
  
}
