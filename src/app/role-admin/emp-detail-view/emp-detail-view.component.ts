import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-emp-detail-view',
  templateUrl: './emp-detail-view.component.html',
  styleUrls: ['./emp-detail-view.component.css']
})
export class EmpDetailViewComponent  implements OnInit{
  public empDetailForm: any = true;
  public employeeId: any;
  public employeeData: any;

  constructor( private activatedRoute:ActivatedRoute,private httpService:HttpRequestService,private router:Router) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    let id = params.get('id');
    this.employeeId = id;
    })
    this.getEmployeeById()
  }
  getEmployeeById() {
    console.log( "employee id",this.employeeId)
    this.httpService.get(`users/${this.employeeId}`).subscribe(response => {
      this.employeeData = response;
    })
  }
  addDevice(empId: any) {
    this.employeeId = empId;
    // this.httpService.setShareData(this.employeeId);
    this.getEmployeeById();
    this.router.navigate(['/admin/admin/employees/'+empId+'/unassigned-devices',empId])
  }
   deleteEmployee() {
    console.log("delete employee" ,this.employeeId)
    this.httpService.delete(`users`,this.employeeId).subscribe(res => {
    console.log( 'deleted employee',res);})
    this.httpService.get(`users`).subscribe(res => { })
    this.router.navigate(['/admin/admin/employees'])
  } 
  unAssignDevice(devId: any){
    const body = {
      "device":
      {
        "user_id": null
      }
    }
    console.log ( "device id",devId)
    this.httpService.put(`devices/${devId}`, body).subscribe(res=>console.log('devdeleted',res))
    this.getEmployeeById();
  }
  }


