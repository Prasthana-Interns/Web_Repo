import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-unassigned-devices',
  templateUrl: './unassigned-devices.component.html',
  styleUrls: ['./unassigned-devices.component.css']
})
export class UnassignedDevicesComponent implements OnInit{

  public unAssignedDevices: any;
  constructor(private router: Router,private activatedRoute:ActivatedRoute ,private httpService:HttpRequestService) { }
  
  ngOnInit(): void{
    this. getUnAssignedDevices()
  }
  getUnAssignedDevices() {
    this.httpService.get(`devices/unassigned`).subscribe(response => {
      this.unAssignedDevices = response;
    })
  }
  assign(device:any) {
    this.router.navigate(['admin/admin/employees/employee-details'])
  }


  
}
