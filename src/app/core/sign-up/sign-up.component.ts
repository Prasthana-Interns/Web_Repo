import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import {FormArray, FormBuilder, FormControl,Validators} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signUp:any;
  approve:boolean=false;
  dropdownList:any=[];
  dropdownSettings:IDropdownSettings={}
  constructor(private au:AuthService, private route:Router, private fb: FormBuilder){}

  ngOnInit(){
    this.dropdownList = [
      { item_id: 1, item_text: 'Employee'},
      { item_id: 2, item_text: 'Admin'},
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
    };
    this.signUp = this.fb.group ({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
    roles:new FormControl([]), 
  })
  console.log(this.signUp)
  }
  roles = new Array()
  hello(data:any){
  console.log(data)
  
  data.map((res: { item_text: any; })=>{
  return this.roles.push(res?.item_text);
    })
  this.signUp.controls['roles'].value  = this.roles
  console.log(this.signUp)
  }

  submitSignUp(){ 
  console.log(this.signUp.value)
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
     })
     this.route.navigate(["/auth/login"]); 
   }
  }
}



