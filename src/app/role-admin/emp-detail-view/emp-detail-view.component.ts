import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-emp-detail-view',
  templateUrl: './emp-detail-view.component.html',
  styleUrls: ['./emp-detail-view.component.css']
})
export class EmpDetailViewComponent  implements OnInit{
  empDetailForm: any = true;
  public ids: any;
  employeeData: any;
//  unAssaignDevices=false

  constructor( private activatedRoute:ActivatedRoute,private service:HttpRequestService,private router:Router) { }
  
  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let ids=params.get('id');
      this.ids = 'id';
      console.log(ids)
    }
    )
     this. getDetailsById()
  }
  

  getDetailsById() {
    console.log("hiii")
    // this.service.getEmployees().subscribe(res=>{  console.log(res)})
    this.service.getEmployeById(this.ids).subscribe(response => {
      this.employeeData = response;
       console.log(response);
    })
  }
  addDevice() {
  //  this. unAssaignDevices = false;
   this.router.navigate(['/admin/admin/employees/employee-details/unassigned-devices'])
  }
  deleteEmployee() {
  } 
  deleteDevice(){}
  }


