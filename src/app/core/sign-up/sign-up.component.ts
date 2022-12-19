import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import {FormArray, FormBuilder, FormControl,Validators} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  buttonText:any;
  heading:any;
  signUp:any;
  hideLogin=false;
  cancel=false;
  alertMsg:any;
  approve:boolean=false;
  dropdownList:any=[];
  dropdownSettings:IDropdownSettings={}
  errorText: any;
  errorResponse: any;
  Response: any;
  constructor(private au:AuthService, private route:Router, private fb: FormBuilder,private location:Location){}
  ngOnInit(){
    if(!!sessionStorage.getItem('token')){
      this.heading="Add Employee"
      this.buttonText="Add"
      this.hideLogin=false;
      this.cancel=true;
      this.approve=true;
    }
    else{
      this.heading="SignUp"
      this.buttonText="signUp"
      this.hideLogin=true;
      this.cancel=false;
      this.approve=false;
    }
    this.dropdownList = [
      { item_id: 1, item_text: 'Employee'},
      { item_id: 2, item_text: 'Admin'},
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
    };
    this.signUp = this.fb.group ({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),  
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
    roles:new FormControl([null,Validators.required]), 
  })
  console.log(this.signUp)
  }
  closeForm(){
      this.route.navigate(['admin/admin/employees'])
  }
  roles = new Array()
  hello(data:any){
    data.map((res: { item_text: any; })=>{
      return this.roles.push(res?.item_text);
        })
        this.signUp.controls['roles'].value  = this.roles
  }
  onItemSelect(data:any){
  if(data?.item_text==='Employee' && data?.item_text==='Admin'){
  data.map((res: { item_text: any; })=>{
  return this.roles.push(res?.item_text);
    })
  }
  else{
   this.roles.push(data?.item_text);
  }
  this.signUp.controls['roles'].value  = this.roles
  console.log(this.signUp)
  }
  submitSignUp(){ 
  console.log(this.signUp)
  if(this.signUp.valid){
    let body= { 
               "user": {
                        "name": this.signUp.controls.name.value,
                        "phone_number": this.signUp.controls.phoneNo.value,
                        "email": this.signUp.controls.email.value,
                        "designation":this.signUp.controls.designation.value,
                        "approved": this.approve,         
                      },
                        "roles":this.signUp.controls['roles'].value=this.roles
              }
      console.log(body);
      this.au.post(`users/signup`,body).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.location.back();
      },
      error: (err:any)=>{
        this.errorText=err
        this.errorResponse=this.errorText?.error?.error
        if(this.errorResponse==="Validation failed: Email has already been taken")
        {
          this.Response="*Email already exists"
        }
        else if(this.errorResponse==="Validation failed: Name is invalid")
        {
          this.Response="*Name is invalid"
        }
        else if(this.errorResponse==="Validation failed: Name is invalid, Email has already been taken")
        {
          this.Response="*Name is invalid & Email already exists"
        }
        else if(this.errorResponse==="Validation failed: Name is invalid, Phone number has already been taken, Email has already been taken"){
          this.Response="*Name is invalid & Email already exists & Phone number has already been taken"
        }
        else if(this.errorResponse==="Validation failed: Name is invalid, Phone number has already been taken"){
          this.Response="*Name is invalid & Phone number has already been taken"
        }
        else if(this.errorResponse==="Validation failed: Phone number has already been taken, Email has already been taken"){
          this.Response="*Email already exists & Phone number has already been taken"
        }
        else if(this.errorResponse==="Validation failed: Phone number has already been taken"){
          this.Response="*Phone number has already been taken"
        }
       } 
     });
   }
  }
}



