import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/core/card/card.component';
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  constructor (private employeeService:EmployeeService, private router:Router){ }
 ngOnInit() {
   this.getEmployeeById();
 }
 employeeData:any
 locaId:any;
 id=localStorage.getItem('id')
  getEmployeeById() {
    this.employeeService.get(`users/${this.id}`).subscribe((res) => {
      this.employeeData=res;
    })
  }
  editEmployee(){
    this.locaId=this.id
    this.router.navigate(['employee/employee-view/editEmployee'])
  }
}
