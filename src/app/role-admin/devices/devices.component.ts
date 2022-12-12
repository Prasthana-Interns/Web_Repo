import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router ,NavigationEnd} from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {


  devicesList:any;
  employeeList:any;
  deviceId:any;

  private searchDeviceList:any;

  searchForm:FormGroup=new FormGroup({
    search:new FormControl('')
  })

  constructor(private router :Router,private http:HttpRequestService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
          this.getAllDevices();
      }
    });
   }

  ngOnInit(): void {
    this.getAllDevices();
    }

  getAllDevices(){
    this.http.get(`devices`).subscribe((res)=>{
    this.devicesList=res;
    console.log(res);
    })
  }
  getEmployeesToAssign(dId:any){
    this.deviceId=dId;
    this.http.setShareData(this.deviceId)
    this.getAllDevices();
    this.router.navigate(['/admin/admin/devices/employeePopUp'])
    }
  post(){
    this.getAllDevices();
    this.router.navigate(['/admin/admin/devices/add-device'])
  }
  deleteDevice(id:any){
    this.http.delete(`devices`,id).subscribe((res)=>{
    })
    this.getAllDevices();
  }
  searchMethod(value?:string){
  this.http.get(`devices/search/?search=${value}`).subscribe((res)=>{
    this.devicesList=res
  })
  }
}
