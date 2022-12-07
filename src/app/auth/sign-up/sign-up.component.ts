import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name:string="";
  email:any;
  phoneNo:number | undefined;
  designation:string="";
  approve:boolean=true;
  password:number=1234567745; 
  role=[];

  constructor(private au:AuthService, private route:Router){}
  dropdownList = [
    { item_id: 1, item_text: 'Employee'},
    { item_id: 2, item_text: 'Admin'},
  ];
  dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
  };

  signUp:any = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
  })

submitSignUp(){ 
  console.log(this.signUp.value)
    let body= { 
                 "user": {
                         "name": this.name,
                         "phone_number": this.phoneNo,
                         "designation":this.designation,
                         "email": this.email,
                         "approved": this.approve,
                         "roles":this.role,
                         "password":this.password               
                         }
              }
     this.au.postEmp(body).subscribe((res:any)=>{
     })
     this.route.navigate(["/login"]); 
   }
}



