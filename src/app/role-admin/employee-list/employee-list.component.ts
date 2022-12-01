import { Component, OnInit } from '@angular/core';
import {  Router, TitleStrategy } from '@angular/router';
import { ListServiceService } from '../../list-service.service';

// import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import {FormControl,FormGroup,Validators} from '@angular/forms';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList: any = null;
  addForm: any = true;
 
  laptop: any;
  //  public sm=this.emplist.name.split("")
  

  constructor(private listService: ListServiceService, private router: Router) { }
  
  addEmploye: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    designation: new FormControl('', [Validators.required]),
  })

  dropDownList = [
    { item_id: 1, item_text: 'Employee' },
    { item_id: 2, item_text: 'Admin' },
  ];
  dropDownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    // enableCheckAll: false,
  };
  ngOnInit(): void {
    this.getList()
  }
  getList() {
    this.listService.getlist().subscribe((response) => {
      this.empList = response;
      console.log(response);
      console.log(this.empList)
    }
    )
  }
  addEmpoyee() {
    this.addForm = true
  }
  empDetailView() {
 
    this.router.navigate(['admin/employee-detail'])
  }
}
