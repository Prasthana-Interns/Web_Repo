import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  addDeviceBody:any
  listOfEmployees:any;  
  name:string='';
  deviceType:string="";
  os:string="";
  user_id:any;

  deviceId:any
  SId:any

  constructor(private router :Router,private ser:HttpRequestService,private fb:FormBuilder,private http:HttpRequestService) { }

  ngOnInit(){
    this.addDeviceBody= this.fb.group({
                  name: new FormControl(null,[Validators.required]),
                  deviceType: new FormControl(null,[Validators.required]),
                  os: new FormControl(null),
                  user_id:new FormControl(null),
  })
  this.deviceId,this.SId=this.http.getShareData();
  this.getEmployees();
  }


  getEmployees(){
    this.http.get(`users/`).subscribe((res)=>{
      this.listOfEmployees=res
      console.log(res)
    })
  }
  canceladdDevice(){
    this.router.navigate(['/admin/admin/devices']);
  }

  submitAddDevice(){
    let body={
              "name": this.addDeviceBody?.controls?.name?.value,
              "device_type": this.addDeviceBody?.controls?.deviceType?.value,
              "os":this.addDeviceBody?.controls?.os?.value,
              "user_id": this.addDeviceBody?.controls?.user_id?.value,               
              }
    this.ser.post(`/devices`,body).subscribe((res:any)=>{
      console.log(res )
    })
    this.router.navigate(['/admin/admin/devices']);
  }

  
}
  // this.router.navigate(['/admin/admin/devices/add-device/employeeDropdown'])