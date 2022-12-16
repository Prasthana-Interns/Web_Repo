import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-pop-up',
  templateUrl: './employee-pop-up.component.html',
  styleUrls: ['./employee-pop-up.component.css']
})
export class EmployeePopUpComponent {
  allEmployees:any;
  temp:any;
  deviceId:any;

  constructor(private router:Router,private http:HttpRequestService,private location:Location){}

  ngOnInit(){
    this.fetchAssignEmployee();
    this.deviceId=this.http.getShareData();
  }
  canceladdDevice(){
    this.router.navigate(['/admin/admin/devices']);
  }
  fetchAssignEmployee(){
    this.http.get(`users`).subscribe((res)=>{
    this.allEmployees=res
    console.log(res)
  });
  }
  assignClicked(id:any){
    this.temp=id;
    const body= {
                    device:
                  { 
                    "user_id":this.temp
                  }
  }
  console.log(id)
  console.log(this.deviceId)
  this.http.put(`devices/${this.deviceId}`,body).subscribe((res)=>{
    console.log(res)
  })  
  this.location.back()
  }

}
