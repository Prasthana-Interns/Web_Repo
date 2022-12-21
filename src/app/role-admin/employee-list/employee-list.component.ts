import { Component, Input, OnInit } from '@angular/core';
import {  Router, TitleStrategy } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  id: any
  role: any
  dp:any
  firstLetter: any
  secondLetter:any
  noEmployees:boolean=false
  constructor(private router: Router, private httpService: HttpRequestService) { }

 ngOnInit(): void {
 this. getEmployees()
  }
  getEmployees() {
    this.httpService.get(`users`).subscribe((response:any) => {
      if (response) {
        this.employees = response;
        for (let x of [response]) {
          // for(){}
        }
        
        // for (let x of [response]) {
        //   for (let y of x) {
        //     // console.log(y.name)
        //     let z = y.name.split(" ")
        //     if (z.length == 1) {
        //       console.log(z[0][0])
        //       this.dp = z[0][0]
        //     } else {
        //       this.firstLetter = z[0][0]
        //       this.secondLetter = z[1][0]
        //       this.dp = this.firstLetter + this.secondLetter
        //       console.log(this.dp)
        //     }
        //   }
        // }


      }
    
    })
  
  }
 
  
  addEmployee() {
    this.router.navigate(['/admin/admin/employees/popup-parent'])
  }
  empDetailView(emp: any) {
    this.router.navigate(['/admin/admin/employees/',emp.id])
  }
  searchMethod(value?:string) {
    this.httpService.get(`users/search/?search=${value}`).subscribe((res: any) => {
      console.log(res)
      if (res?.length == 0)
      {
        this.noEmployees = true;
      }
      else {
        this.noEmployees = false;
        this.employees = res;
      }
    })   
    }
  }
