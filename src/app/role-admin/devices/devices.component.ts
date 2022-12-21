import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
import { NgConfirmService} from 'ng-confirm-box'

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {


  devicesList:any;
  deviceId:any;
  noRecordFound=false;
  text:any;

  constructor(private router :Router,private http:HttpRequestService,private confirmService:NgConfirmService) {}

  ngOnInit(): void {
    this.getAllDevices();
    }
  sizes(){
    if(!!(!this.devicesList?.length)){
      this.noRecordFound=true;
      this.text="No devices found"
    }
  }
  getAllDevices(){
    this.http.get(`devices`).subscribe((res:any)=>{
    this.devicesList=res;
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
        this.getAllDevices();
      })
    },
    () => {
      this.getAllDevices();
    })
  }

searchMethod(value?:string){
this.http.get(`devices/search/?search=${value}`).subscribe((res:any)=>{
  if(res?.length==0){
    this.noRecordFound=true;
    this.text="No devices found"
  }
  else{
    this.noRecordFound=false;
    this.devicesList=res;
  }
})
}
}
