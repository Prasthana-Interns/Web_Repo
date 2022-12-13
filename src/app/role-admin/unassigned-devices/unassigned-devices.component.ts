import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-unassigned-devices',
  templateUrl: './unassigned-devices.component.html',
  styleUrls: ['./unassigned-devices.component.css']
})
export class UnassignedDevicesComponent implements OnInit{
  @Input() sendEmpId: any;
  @Output() public un_assigned_devices: EventEmitter<any> = new EventEmitter();
  unAssignedDevices: any;
  empId: any;
  is_un_assigned_devices: boolean=false
  
constructor(private httpService:HttpRequestService) { }
  
ngOnInit(): void{
   this.getUnAssignedDevices();
}
getUnAssignedDevices() {
   this.httpService.get(`devices/unassigned`).subscribe(response => {
   this.unAssignedDevices = response;
    })
 }
assignDevice(id: any) {
    const body = {
      "device": {
        "user_id": this.sendEmpId
             }
          }
    this.httpService.put(`devices/${id}`, body).subscribe(res => {
    })
    this.un_assigned_devices.emit(this.is_un_assigned_devices)
  }
  unAssingnDevices() {
  this.un_assigned_devices.emit(this.is_un_assigned_devices)
  }
}
