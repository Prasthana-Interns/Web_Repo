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
  showIcon = false
  noEmployees:boolean=false
  // spl:any
  constructor(private router: Router, private httpService: HttpRequestService) { }

 ngOnInit(): void {
 this. getEmployees()
  }
  getEmployees() {
    this.httpService.get(`users`).subscribe((response:any) => {
      if (response) {
        this.employees = response;
         }
        for (let x of [response]) {
          for (let y of x) {
            // console.log(y.name)
            let z = y.name.split(" ")
            if (z.length == 1) {
              console.log(z[0][0])
              this.dp=z[0][0]
            } else {
             this.firstLetter = z[0][0]
              this.secondLetter = z[1][0]
              this.dp = z[0][0] + z[1][0]
              console.log(this.dp)
              
            }
            // console.log(z)
            // if (z.length > 0) {
            //   this.firstLetter = z[0][0]
            //   this.secondLetter = z[1][0]
            //   this.dp = z[0][0] + z[1][0]
            //   console.log(this.dp)
            // }
            // else if (z.length < 1) {
             
            //   console.log( z[0][0])
            // }
           
             
           
            // console.log(this.firstLetter)
            // console.log(this.secondLetter)
            // console.log(this.dp)
            // if (z.length > 0) {
              // console.log(z[1][0])
              // this.secondLetter = z[1][0]
              // this.dp = this.firstLetter + this.secondLetter
              // console.log(this.dp)
            //   console.log(this.secondLetter,this.firstLetter)
            // }
            // else {
            //   this.dp = this.firstLetter
            // }
        }
     }
      // for(let x of this.employees){
      //   console.log(x)
      //  if((x.devices.length>=3)){this.showIcon=false}
      
    
      // this.showIcon=true
      // }
    })
  
  }
 
      // for (let x of this.employees) {
      //   // console.log(x)
      //   // console.log(x.name)
      //   let a = x.name
      //   let b = a.split(" ")[0][0]
      
      //   if ((a.split(" ")[1][0])==undefined) {
      //     // console.log(a.split(" ")[0][0] ,a.split(" ")[1][0])
      //     // let c=a.split(" ")[1][0]
      //     // console.log(b, c)
      //     // this.spl = (`${b}${c}`)
      //     this.spl=b;
      //     console.log(b)
      //   }
      //   else{
      //    console.log( a.split(" ")[0][0] , a.split(" ")[1][0])
      //    this.spl=a.split(" ")[0][0] , a.split(" ")[1][0];
      //     }

      // }
    
  
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
