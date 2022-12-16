import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-unassigned-devices',
  templateUrl:'./unassigned-devices.component.html',
  styleUrls: ['./unassigned-devices.component.css']
})
export class UnassignedDevicesComponent implements OnInit{
  @Input() _id: any;
  @Output() public hasDevices: EventEmitter<any> = new EventEmitter();
  unAssignedDevices: any;
  hasDevicesForm: boolean=false
  
constructor(private httpService:HttpRequestService) { }
  
ngOnInit(): void{
  this.getUnAssignedDevices();
}
getUnAssignedDevices() {
  this.httpService.get(`devices/unassigned`).subscribe(response => {
  this.unAssignedDevices = response; })
}
assignDevice(id: any) {
  const body = {
   "device": {
        "user_id": this._id
             }
  }
  this.httpService.put(`devices/${id}`, body).subscribe(res => {
  this.hasDevices.emit(this.hasDevicesForm)
  })
  
}
closeDevicesForm() {
  this.hasDevices.emit(this.hasDevicesForm)
}
}
