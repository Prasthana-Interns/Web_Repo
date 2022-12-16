import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  implements OnInit ,OnDestroy{
 addEmployeeForm:any;
  isApprove:boolean=true;
  dropdownList:any=[];
  dropdownSettings: IDropdownSettings = {}
  constructor(private httpService: HttpRequestService, private router: Router, private fb: FormBuilder) { }
  
  ngOnInit() {
   this.httpService.get(`users`).subscribe(res => { });
    this.dropdownList = [
      { item_id: 1, item_text: 'Employee'},
      { item_id: 2, item_text: 'Admin'},
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
    };
    this.addEmployeeForm = this.fb.group ({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
    roles:new FormControl([]), 
  })
  console.log(this.addEmployeeForm)
  
  }
  
  roles = new Array()
hello(data:any){
    data.map((res: { item_text: any; })=>{
      return this.roles.push(res?.item_text);
        })
        this.addEmployeeForm.controls['roles'].value  = this.roles
}
onItemSelect(data:any){
  console.log(data?.item_text)
  if(data?.item_text==='Employee' && data?.item_text==='Admin'){
  data.map((res: { item_text: any; })=>{
  return this.roles.push(res?.item_text);})
  }
  else{
   this.roles.push(data?.item_text);
  }
  this.addEmployeeForm.controls['roles'].value  = this.roles
  console.log(this.addEmployeeForm)
  }

addEmployee() { 
  if(this.addEmployeeForm.valid){
    let body= { 
               "user": {
                        "name": this.addEmployeeForm.controls.name.value,
                        "phone_number": this.addEmployeeForm.controls.phoneNo.value,
                        "email": this.addEmployeeForm.controls.email.value,
                        "designation":this.addEmployeeForm.controls.designation.value,
                        "approved": this.isApprove,         
                      },
                        "roles":this.addEmployeeForm.controls['roles'].value=this.roles
              }
              console.log(body);
    this.httpService.post(`users/signup`, body).subscribe((res: any) => {
     this.getEmp();
      console.log(res)});
  
   
    this.router.navigate(['admin/admin/employees']);
     }
}
  cancelForm() {
    this.router.navigate(['admin/admin/employees'])
  }
  getEmp() {
    this.httpService.get(`users`).subscribe(res => { 
       
     });
  }
  ngOnDestroy(): void {
    this.getEmp();
  }
  
}

