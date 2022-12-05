import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor(private router :Router) { }
  addDevice:any = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    deviceType: new FormControl(null,[Validators.required]),
    os: new FormControl(null),
    serviceTag:new FormControl(null,[Validators.required]),
    assignedTo:new FormControl(null),
  })

  ngOnInit(): void {
  }

  submitAddDevice(){
    console.log(this.addDevice.value);
    alert("Device Added Successfully");
    this.router.navigate(['/devices']);
  }

  // changecolor(){
  //   this.router.navigate['/add-device'];
  // }
}
