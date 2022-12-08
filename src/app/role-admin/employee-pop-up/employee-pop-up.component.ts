import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';


@Component({
  selector: 'app-employee-pop-up',
  templateUrl: './employee-pop-up.component.html',
  styleUrls: ['./employee-pop-up.component.css']
})
export class EmployeePopUpComponent {
  allEmployees:any;
  temp:any;
  @Input()deviceId:any;

  constructor(private router:Router,private http:HttpRequestService){}

  ngOnInit(){
    // console.log(this.deviceId);
    this.fetchAssignEmployee()
  }
  canceladdDevice(){
    this.router.navigate(['/admin/admin/devices']);
  }
  fetchAssignEmployee(){
    this.http.getListEmployee().subscribe((res)=>
    this.allEmployees=res
    );
  }
  // :3000/devices/id 
  assignClicked(id:any){
    this.temp=id;
    const assignBody= {
                    device:
                  { 
                    "user_id":this.temp
                  }
  }
  console.log(id)
  this.http.assignDeviceToEmployee(assignBody,id)
  this.router.navigate(['/admin/admin/devices']);
  }

}
