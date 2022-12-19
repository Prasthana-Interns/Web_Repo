import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPass:any
  alertMsg:any;
  response:any;
  errorText:any;
  constructor(private router:Router, private fb:FormBuilder, private as:AuthService){ }

ngOnInit() {
  this.resetPass= this.fb.group({
      empId:new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(7)]),
  })
}
submitResetPass(){
  if(this.resetPass.valid){
  let body={
     "emp_id": this.resetPass.controls.empId.value
    }
    this.as.put(`reset_password`,body).subscribe({
      next: (res:any)=>{
        this.router.navigate(["/login"]);
      },
      error: (err:any)=>{
        this.errorText=err
        this.alertMsg=this.errorText?.error?.error
        if(this.alertMsg==="Couldn't find User"){
          this.response="*Invalid Employee"
        }
      }
    })
  
  }
}
}

