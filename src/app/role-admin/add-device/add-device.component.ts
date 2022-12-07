import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  addDeviceShow=false;
  addDeviceBody:any 
  constructor(private router :Router,private ser:HttpRequestService,private fb:FormBuilder) { }



  ngOnInit(){
    this.addDeviceBody= this.fb.group({
                          name: new FormControl(null,[Validators.required]),
                          deviceType: new FormControl(null,[Validators.required]),
                          os: new FormControl(null),
                          user_id:new FormControl(null),
    })  
  }

  showAddDeviceForm(){
    this.addDeviceShow=true;
  }
  cancelAddDevice(){
    this.addDeviceShow=false;
  }

  submitAddDevice(){
    console.log(this.addDeviceBody.value);
    this.ser.addDevice(this.addDeviceBody).subscribe((res)=>{
    })
    alert("Device Added Successfully");
    this.router.navigate(['/admin/admin/devices']);
  }

  // changecolor(){
  //   this.router.navigate['/add-device'];
  // }
}
