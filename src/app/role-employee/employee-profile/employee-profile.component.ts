import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  constructor(private router:Router,private confirmService:NgConfirmService){}

  logout(){
    this.confirmService.showConfirm("Are you sure want to logout",
    ()=>{
      localStorage.clear();
      this.router.navigate(['/login']);
    },
    ()=>{
      
    })
  }
}
