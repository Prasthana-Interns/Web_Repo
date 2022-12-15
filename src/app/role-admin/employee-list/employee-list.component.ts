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
  constructor(private router: Router, private httpService: HttpRequestService) { }

 ngOnInit(): void {
 this. getEmployees()
  }
  getEmployees() {
    this.httpService.get(`users`).subscribe(response => {
      this.employees = response;
      console.log(response)
    })
  }
  addEmployee() {
    this.router.navigate(['/core/signup'])
  }
  empDetailView(emp: any) {
    this.router.navigate(['/admin/admin/employees/',emp.id])
  }
  
}
