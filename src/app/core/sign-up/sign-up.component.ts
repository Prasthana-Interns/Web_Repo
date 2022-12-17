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
  hasError:boolean=false
  constructor(private au:AuthService, private route:Router, private fb: FormBuilder,private location:Location){}
  ngOnInit(){
    if(!!localStorage.getItem('token')){
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
    // this.closeForm();
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
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),  
    email: new FormControl('',[Validators.required,Validators.email]),
    phoneNo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl('',[Validators.required]),
    roles:new FormControl([]), 
  })
  console.log(this.signUp)
  }
  closeForm(){
    this.location.back();
  }
  roles = new Array()
  hello(data:any){
    data.map((res: { item_text: any; })=>{
      return this.roles.push(res?.item_text);
        })
        this.signUp.controls['roles'].value  = this.roles
  }
  onItemSelect(data:any){
  console.log(data?.item_text)
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
     this.au.post(`users/signup`,body).subscribe((res:any)=>{
     console.log(res)

     }
    //  error=>{
    //   this.errorText=error
    //   this.errorResponse=this.errorText?.error?.error
    //   if(this.errorResponse==="Validation failed: Email has already been taken")
    //   {
    //     this.Response="*Email has already been taken"
    //   }
    //   else if (this.errorResponse!="Validation failed: Email has already been taken") {
    //     this.Response=""
    //   } 
    //  }
     )
     this.location.back()
   }
   else{
    this.hasError=true
    // this.alertMsg="*Invalid details"; 
   }
  }
}



