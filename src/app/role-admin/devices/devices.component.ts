import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
import { NavigationEnd } from '@angular/router';
import { NgConfirmService} from 'ng-confirm-box'

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {


  devicesList:any;
  employeeList:any;
  deviceId:any;
  noRecordFound=false;
  text:any;
  data:any;
  imageUrl:any;

  constructor(private router :Router,private http:HttpRequestService,private confirmService:NgConfirmService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
          this.getAllDevices();
      }
    });
   }

  ngOnInit(): void {
    this.sizes();
    this.getAllDevices();
    console.log(this.data)
    }
    sizes(){
      if(!!(this.devicesList?.length)){
        this.noRecordFound=true;
        this.text="No devices found"
      }
    }
  getAllDevices(){
    this.http.get(`devices`).subscribe((res:any)=>{
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
    this.router.navigate(['/admin/admin/add-device'])
  }
  deleteDevice(id:any){
    this.confirmService.showConfirm("Are you sure want to Delete ?",
     () => {
      this.http.delete(`devices`,id).subscribe((res)=>{
      })
      this.getAllDevices();
    },
    () => {
      this.getAllDevices();
    })
  }

searchMethod(value?:string){
this.http.get(`devices/search/?search=${value}`).subscribe((res)=>{
  this.devicesList=res
})
}
}
