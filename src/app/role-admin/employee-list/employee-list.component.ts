import { Component, OnInit } from '@angular/core';
import {  Router, TitleStrategy } from '@angular/router';
import { ListServiceService } from '../../list-service.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  emplist: any = null;
  addform: any = false;
  empdetailform: any = true;
  laptop: any;
//  public sm=this.emplist.name.split("")
  

  constructor(private listservice: ListServiceService, private router:Router) { }


  ngOnInit(): void {
    this.getlist()
  
 
  }
  getlist() {
     this.listservice.getlist().subscribe((response) => {
      this.emplist = response;
      console.log(response);
      console.log(this.emplist)
    },
      (error) => { console.log("error") }
    )
  }
  

  addEmpoyee() {
    this.addform = true
    this.empdetailform=false
  
  }
 
  
  empDetailView() {
    this.router.navigate(['admin/employees/employee-detail'])
  }
 



}
