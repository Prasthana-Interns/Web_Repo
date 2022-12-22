import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-pop-up',
  templateUrl: './employee-pop-up.component.html',
  styleUrls: ['./employee-pop-up.component.css']
})
export class EmployeePopUpComponent {

  @Output() public hasEmployees:EventEmitter<any>=new EventEmitter()
  allEmployees:any;
  temp:any;
  deviceId:any;
  hasEmployeePopup:boolean=false;
  constructor(private router:Router,private http:HttpRequestService,private location:Location){}
  ngOnInit(){
    this.fetchAssignEmployee();
    this.deviceId=this.http.getShareData();
  }
  canceladdDevice(){
    this.hasEmployees.emit(this.hasEmployeePopup)
  }
  fetchAssignEmployee(){
    this.http.get(`users`).subscribe((res)=>{
    this.allEmployees=res
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
  this.http.put(`devices/${this.deviceId}`,body).subscribe((res)=>{
    this.hasEmployees.emit(this.hasEmployeePopup)
  })  
  }

}
