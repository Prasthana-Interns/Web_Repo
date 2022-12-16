import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private confirmService:NgConfirmService) { }

  ngOnInit() {
  }
  logout(){
    this.confirmService.showConfirm("Are you sure want to logout",
    ()=>{
      localStorage.clear()
      this.router.navigate(['/login'])
    },
    ()=>{
      
    })
  }
}
