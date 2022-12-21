import { Component ,OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
import { NgConfirmService } from 'ng-confirm-box';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-emp-detail-view',
  templateUrl: './emp-detail-view.component.html',
  styleUrls: ['./emp-detail-view.component.css']
})
export class EmpDetailViewComponent  implements OnInit{
  // public empDetailForm: any = true;

  public employeeId: any;
  public employeeData: any;
  public _id: any;
  role: any
  
  hasDevicesForm = false;
  noDevicesAssigned = false;
  
  constructor( private activatedRoute:ActivatedRoute,private httpService:HttpRequestService,private router:Router,private confirmService:NgConfirmService) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    let id = params.get('id');
    this.employeeId = id;})
    this.getEmployeeById()
   
  
  }
  getEmployeeById() {
    this.httpService.get(`users/${this.employeeId}`).subscribe(response => {
     
      if (response) {
         this.employeeData = response;
        console.log(response)
        if (this.employeeData.devices.length == 0) {
          this.noDevicesAssigned = true
        }
        if (this.employeeData?.user_roles?.includes('Admin')) {
          this.role = 'Admin'
        }
        else {
          this.role = 'Employee'
        }
      }
      })
  }
  deleteEmployee() {
    this.confirmService.showConfirm("Are you sure to delete", () => { 
    this.httpService.delete(`users`,this.employeeId).subscribe(res => {
      this.httpService.get(`users`).subscribe(res => { })
    })
    this.router.navigate(['/admin/admin/employees'])
   }, () => {}) 
  } 
  addDevice() {
    this.hasDevicesForm=true
    this._id = this.employeeId;
  this.noDevicesAssigned =false;

  }
  unassignDevicesList(data: any) {
    this.hasDevicesForm = data;
    this.getEmployeeById();
  }
  unAssignDevice_delete(devId: any) {
    this.confirmService.showConfirm("Are you sure to delete",() => {
    const body = {
          "device":
          {
            "user_id": null
          }
        }
    this.httpService.put(`devices/${devId}`, body).subscribe(res => {
    this.getEmployeeById();
    })
    },() =>{})
 }
  }


