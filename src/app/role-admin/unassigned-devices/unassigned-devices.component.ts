import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-unassigned-devices',
  templateUrl:'./unassigned-devices.component.html',
  styleUrls: ['./unassigned-devices.component.css']
})
export class UnassignedDevicesComponent implements OnInit{

  unAssignedDevices: any;
  empId: any;

  constructor(private router: Router,private activatedRoute:ActivatedRoute ,private httpService:HttpRequestService) { }
  
  ngOnInit(): void{
    console.log("unassigned deices")
    this.getUnAssignedDevices();
    this.getEmployeeId();
    // this.empId=this.httpService.getShareData()
  }
  getEmployeeId() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let employeeId = params.get('id');
      this.empId = employeeId;})
  }
  getUnAssignedDevices() {
    console.log("hiiii")
    this.httpService.get(`devices/unassigned`).subscribe(response => {
      this.unAssignedDevices = response;
    })
  }
  assignDevice(id: any) {
    const body = {
      "device": {
        "user_id": this.empId
      }
    }
    console.log("emp id", this.empId)
    console.log("device id", id)
    this.httpService.put(`users/${this.empId}`).subscribe(res=>{console.log})
    this.httpService.put(`devices/${id}`, body).subscribe(res => { console.log(res)})

    this.getEmployeeId();
    this.router.navigate(['admin/admin/employees/',this.empId])
  }


  
}
