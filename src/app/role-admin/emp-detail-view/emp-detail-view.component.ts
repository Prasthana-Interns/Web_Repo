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
  public ids: any;
  public employeeData: any;
  
  constructor( private activatedRoute:ActivatedRoute,private httpService:HttpRequestService,private router:Router) { }
  
  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id=params.get('id');
      this.ids =id;
    })
     this. getEmployeeById()
  }
  

  getEmployeeById() {
    console.log("hiii")
    this.httpService.get(`users/${this.ids}`).subscribe(response => {
      this.employeeData = response;
    })
  }
  addDevice(emp:any) {
   this.router.navigate(['/admin/admin/employees/'+emp.id+'/unassigned-devices'])
  }
  deleteEmployee() {
  } 
  deleteDevice(){}
  }


