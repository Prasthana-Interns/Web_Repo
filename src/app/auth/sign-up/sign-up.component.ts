import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

import {FormArray, FormBuilder, FormControl,Validators} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signUp:any;
  approve:boolean=true;
  constructor(private au:AuthService, private route:Router, private fb: FormBuilder){}

  dropdownList = [
    { item_id: 1, item_text: 'Employee'},
    { item_id: 2, item_text: 'Admin'},
  ];
  dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: true,
  };

  ngOnInit(){
  this.signUp = this.fb.group ({

    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNo: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    designation:new FormControl(null,[Validators.required]),
    role:this.fb.array([
        new FormControl(null)])
      
  })
  console.log(this.signUp)
  }

  submitSignUp(){ 
    console.log("qwerf")
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
                        "roles":this.signUp.controls.role.value
              }
     this.au.postEmp(body).subscribe((res:any)=>{
     })
     this.route.navigate(["/auth/login"]); 
   }
   
}


}



