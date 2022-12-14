import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  employeeData: any
  adminId: any;
  id = localStorage.getItem('id');

constructor (private httpService :HttpRequestService, private router:Router){ }
 ngOnInit() {
   this.getProfile();
 }
   getProfile() {
    this.httpService.get(`users/${this.id}`).subscribe((res) => {
    this.employeeData=res;
    })
  }
  editProfile() {
    this.adminId=this.id
    this.router.navigate(['employee/profile/edit-profile'])
  }
}