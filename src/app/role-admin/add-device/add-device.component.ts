import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  addDeviceShow=false;
  addDeviceBody:any
  
  
  name:string='';
  deviceType:string="";
  os:string="";
  user_id:any;
  constructor(private router :Router,private ser:HttpRequestService,private fb:FormBuilder) { }

  ngOnInit(){
    this.addDeviceBody= this.fb.group({
                  name: new FormControl(null,[Validators.required]),
                  deviceType: new FormControl(null,[Validators.required]),
                  os: new FormControl(null),
                  user_id:new FormControl(null),
  })
  }

  dropdownList = [
    { item_id: 1, item_text: 'Employee'},
    { item_id: 2, item_text: 'Admin'},
  ];
  dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: true,
  };
  
  showAddDeviceForm(){
    this.addDeviceShow=true;
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
    this.ser.addDevice(body).subscribe((res:any)=>{
    console.log(res);
    })
    alert("Device Added Successfully");
    this.router.navigate(['/admin/admin/devices']);
  }

  
}
