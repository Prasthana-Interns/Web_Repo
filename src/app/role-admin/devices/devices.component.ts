import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { devices} from 'src/app/model';
import { employees } from '../../employeeModel';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  allDevices = devices;
  allEmployees=employees;
  

  // addDeviceForm=false;
  // addDeviceShow=false;
  // showEmployees=false;

  devicesList:any;
  employeeList:any;
  deviceId:any;

  constructor(private router :Router,private http:HttpRequestService) { }

  ngOnInit(): void {
    this.getAllDevices();
  }

  searchMethod(){
    console.log("search bar");
  }
  getAllDevices(){
    this.http.getDevices().subscribe((res)=>{
      this.devicesList=res;
    })
  }
  getEmployeesToAssign(dId:any){
    // this.http.getEmployees().subscribe((res)=>{
    //   this.employeeList=res;
      // this.showEmployees=true;
      this.deviceId=dId;
      console.log(this.deviceId);
      this.router.navigate(['/admin/admin/devices/employeePopUp'])

    }
    // )
  // }
  addDevice(){
    console.log("asdfghjk");
    // this.addDeviceShow=true;
    this.router.navigate(['/admin/admin/devices/add-device'])
  }


}
